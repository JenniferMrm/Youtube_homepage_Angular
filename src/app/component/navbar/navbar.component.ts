import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/common/category.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() sendFilterValueToApp: EventEmitter<string> =
    new EventEmitter<string>();

  chips: Array<Category> = [
    new Category('All'),
    new Category('Bass'),
    new Category('TV Shows'),
    new Category('Gaming'),
    new Category('Movies'),
    new Category('Podcasts'),
    new Category('Documentaries'),
    new Category('Animals'),
    new Category('Live'),
    new Category('Sports'),
    new Category('Cooking shows'),
    new Category('Code'),
    new Category('Music'),
    new Category('Entertainment'),
    new Category('History'),
  ];

  filterValue: string = '';

  transitFilterValue($event: string): void {
    this.sendFilterValueToApp.emit($event);
  }

  constructor() {}

  ngOnInit(): void {}
}
