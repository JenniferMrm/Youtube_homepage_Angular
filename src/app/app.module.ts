import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailComponent } from './component/thumbnail/thumbnail.component';
import { ThumbnailListComponent } from './component/thumbnail-list/thumbnail-list.component';
import { LiveComponent } from './component/live/live.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LeftSectionComponent } from './component/left-section/left-section.component';
import { ChipComponent } from './component/chip/chip.component';
import { ListItemComponent } from './component/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    ThumbnailListComponent,
    LiveComponent,
    HeaderComponent,
    NavbarComponent,
    LeftSectionComponent,
    ChipComponent,
    ListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
