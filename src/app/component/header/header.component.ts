import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchValue: string = '';

  @Output() sendSearchValueToApp: EventEmitter<string> =
    new EventEmitter<string>();

  public retrieveSearchValue(value: string): void {
    this.sendSearchValueToApp.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
