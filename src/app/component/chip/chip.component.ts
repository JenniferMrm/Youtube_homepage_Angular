import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/common/category.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() chip: Category = new Category('');

  @Output() sendFilterValueToNav: EventEmitter<string> =
    new EventEmitter<string>();

  public retrieveFilterValue(value: string): void {
    this.sendFilterValueToNav.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
