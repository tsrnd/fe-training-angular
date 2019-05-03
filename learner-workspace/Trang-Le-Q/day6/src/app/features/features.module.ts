import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [FeaturesComponent, NewsComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    FeaturesComponent
  ]
})
export class FeaturesModule { }
