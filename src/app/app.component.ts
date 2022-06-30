import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube_angular';

  filterValue: string = '';

  searchValue: string = '';

  transitFilterValue($event: string): void {
    this.filterValue = $event;
  }

  transitSearchValue($event: string): void {
    this.searchValue = $event;
  }
}
