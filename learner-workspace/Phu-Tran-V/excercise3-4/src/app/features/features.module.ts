import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { CategoryComponent } from '../../../../final-excercise/src/app/features/category/category.component';

@NgModule({
  declarations: [FeaturesComponent, CategoryComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
