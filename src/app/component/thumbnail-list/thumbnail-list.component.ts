import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Category } from 'src/app/common/category.model';
import { Thumbnail } from 'src/app/common/thumbnail.model';

@Component({
  selector: 'app-thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: ['./thumbnail-list.component.scss'],
})
export class ThumbnailListComponent implements OnInit, OnChanges {
  @Input() filter: string = '';
  @Input() search: string = '';

  thumbnails: Array<Thumbnail> = [
    new Thumbnail(
      '../../../assets/pictures/thumbnail10.png',
      'GOROD | Hina [Guitar & Drum Playthrough]',
      '../../../assets/pictures/avatar9.png',
      'GOROD',
      7600,
      0,
      '11 months ago',
      new Category('Music'),
      false,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail1.png',
      'Lofi Hip Hop radio - beats to relax/study',
      '../../../assets/pictures/avatar1.png',
      'Lofi Girl',
      0,
      25000,
      '',
      new Category('Live'),
      true,
      true
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail5.png',
      'VULFPECK /// Disco Ulysses (Instrumental)',
      '../../../assets/pictures/avatar5.png',
      'Vulf',
      551000,
      0,
      '2 years ago',
      new Category('Music'),
      true,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail4.png',
      'Apprendre typescript: Syntaxe de base',
      '../../../assets/pictures/avatar4.png',
      'Grafikart',
      12000,
      0,
      '8 months ago',
      new Category('Code'),
      false,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail12.png',
      'VULFPECK /// Dean Town',
      '../../../assets/pictures/avatar5.png',
      'Vulf',
      15000000,
      0,
      '5 years ago',
      new Category('Music'),
      true,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail8.png',
      'Broken Harry - Married To A Stone',
      '../../../assets/pictures/avatar7.png',
      'Broken Harry',
      521,
      0,
      '4 years ago',
      new Category('Music'),
      false,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail2.png',
      'Summer Vibes - Lofi Hip Hop Radio',
      '../../../assets/pictures/avatar2.png',
      'Lofi Vibes',
      0,
      235,
      '',
      new Category('Live'),
      false,
      true
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail11.png',
      'All Them Witches "Charles Williams" OFFICIAL MUSIC VIDEO',
      '../../../assets/pictures/avatar10.png',
      'All Them Witches ♪',
      1000000,
      0,
      '7 years ago',
      new Category('Music'),
      false,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail6.png',
      "VULFPECK /// Baby I Don't Know Oh Oh (feat. Charles Jones)",
      '../../../assets/pictures/avatar5.png',
      'Vulf',
      2300000,
      0,
      '4 years ago',
      new Category('Music'),
      true,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail7.png',
      'BACK TO BASICS',
      '../../../assets/pictures/avatar6.png',
      'Marc Rebillet',
      705000,
      0,
      'Streamed 1 year ago',
      new Category('Music'),
      true,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail9.png',
      'Billie Eilish - Lost Cause Bass Cover (With Tab)',
      '../../../assets/pictures/avatar8.png',
      'My Bassist Chris',
      27000,
      0,
      '1 year ago',
      new Category('Bass'),
      false,
      false
    ),
    new Thumbnail(
      '../../../assets/pictures/thumbnail3.png',
      'Suicidal Tendencies - Hellfest 2022, @ArteConcert',
      '../../../assets/pictures/avatar3.png',
      'Arte Concert',
      117000,
      0,
      '2 days ago',
      new Category('Music'),
      false,
      false
    ),
  ];

  filteredThumbnails: Array<Thumbnail> = [
    new Thumbnail('', '', '', '', 0, 0, '', new Category(''), false, false),
  ];

  searchedThumbnails: Array<Thumbnail> = [
    new Thumbnail('', '', '', '', 0, 0, '', new Category(''), false, false),
  ];

  onSelectedFilter(): void {
    if (this.filter == '') {
      this.filteredThumbnails = this.thumbnails;
    } else if (this.filter == 'All') {
      this.filteredThumbnails = this.thumbnails;
    } else {
      this.filteredThumbnails = this.thumbnails.filter(
        (thumbnail) => thumbnail.category.category == this.filter
      );
    }
  }

  onSearched(): void {
    if (!this.search) {
      this.searchedThumbnails = this.filteredThumbnails;
    } else {
      this.searchedThumbnails = this.filteredThumbnails.filter((thumbnail) => {
        return thumbnail.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    }
  }

  constructor() {}

  ngOnChanges(): void {
    this.onSelectedFilter();
    this.onSearched();
  }
  ngOnInit(): void {
    this.onSelectedFilter();
    this.onSearched();
  }
}
