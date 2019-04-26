import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CategoryComponent } from './category/category.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CoreModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
