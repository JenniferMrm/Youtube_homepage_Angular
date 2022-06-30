import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/common/category.model';
import { Thumbnail } from 'src/app/common/thumbnail.model';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {
  @Input() thumbnail: Thumbnail = new Thumbnail(
    '',
    '',
    '',
    '',
    0,
    0,
    '',
    new Category(''),
    false,
    false
  );

  formatViews(num: number, digits: number): string {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  }

  constructor() {}

  ngOnInit(): void {}
}
