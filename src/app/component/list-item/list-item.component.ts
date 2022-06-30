import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/common/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() hasIcon: boolean = true;

  @Input() item: ListItem = new ListItem('', '');

  constructor() {}

  ngOnInit(): void {}
}
