import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/common/list-item.model';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss'],
})
export class LeftSectionComponent implements OnInit {
  topListItems: Array<ListItem> = [
    new ListItem('fi fi-rs-home', 'Home'),
    new ListItem('fi fi-rs-navigation', 'Explore'),
    new ListItem('fi fi-rs-play-alt', 'Shorts'),
    new ListItem('fi fi-rs-following', 'Subscriptions'),
  ];

  middleListItems: Array<ListItem> = [
    new ListItem('fi fi-rs-play-alt', 'Library'),
    new ListItem('fi fi-rs-play-alt', 'History'),
    new ListItem('fi fi-rs-play', 'Your videos'),
    new ListItem('fi fi-rs-clock', 'Watch later'),
    new ListItem('fi fi-rs-thumbs-up', 'Liked videos'),
    new ListItem('fi fi-rs-angle-down', 'Show more'),
  ];

  subscriptionItems: Array<ListItem> = [
    new ListItem('../../../assets/pictures/sub1.png', 'Sonya Lwu'),
    new ListItem('../../../assets/pictures/sub2.png', 'Gurky'),
    new ListItem('../../../assets/pictures/sub3.png', 'Feldup'),
    new ListItem('../../../assets/pictures/sub4.png', 'Best Of Antoine Da...'),
    new ListItem('../../../assets/pictures/sub5.png', 'Ultia'),
    new ListItem('../../../assets/pictures/sub6.png', 'Benjamin Code'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
