import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeaturesComponent, HomeComponent, CategoryComponent, DetailComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  exports: [
    FeaturesComponent
  ]
})
export class FeaturesModule { }
