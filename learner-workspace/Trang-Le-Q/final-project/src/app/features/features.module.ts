import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [HomeComponent, CategoryComponent, DetailComponent, ItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
