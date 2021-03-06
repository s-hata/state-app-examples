import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule,MdInputModule,MdCheckboxModule,MdSidenavModule,MdToolbarModule } from '@angular/material';
import 'hammerjs';
import { AppCmp } from './app/app';
import { TalksCmp } from './talks/talks';
import { TalkCmp } from './talk/talk';
import { WatchButtonCmp } from './watch-button/watch-button';
import { RateButtonCmp } from './rate-button/rate-button';
import { FormatRatingPipe } from './pipes/format-rating.pipe';
import {Backend} from "./backend";
import { FiltersCmp } from './filters/filters';
import {RouterModule} from "@angular/router";
import {TalksAndFiltersCmp} from "./talks-and-filters/talks-and-filters";
import {TalkDetailsCmp} from "./talk-details/talk-details";
import {HttpModule} from "@angular/http";
import {WatchService} from "./watch";

@NgModule({
  declarations: [
    AppCmp,
    TalksCmp,
    TalkCmp,
    TalkDetailsCmp,
    WatchButtonCmp,
    RateButtonCmp,
    FormatRatingPipe,
    FiltersCmp,
    TalksAndFiltersCmp
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
		BrowserAnimationsModule,
		MdCardModule,
		MdInputModule,
		MdCheckboxModule,
		MdSidenavModule,
		MdToolbarModule,
    RouterModule.forRoot([
      { path: '',  pathMatch: 'full', redirectTo: 'talks'},
      { path: 'talks',  component: TalksAndFiltersCmp },
      { path: 'talk/:id', component: TalkDetailsCmp }
    ], {useHash: true}),
  ],
  providers: [
    Backend,
    WatchService
  ],
  exports: [
    MdCardModule,
		MdInputModule,
		MdCheckboxModule,
		MdSidenavModule,
		MdToolbarModule
	],
  bootstrap: [AppCmp]
})
export class AppModule { }
