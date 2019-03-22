import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import {FormatContentPipe} from '../shared/pipe/format-content.pipe';


@NgModule({
  declarations: [HomeComponent, NewsComponent, CardComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  providers: [FormatContentPipe]
})
export class FeaturesModule { }
