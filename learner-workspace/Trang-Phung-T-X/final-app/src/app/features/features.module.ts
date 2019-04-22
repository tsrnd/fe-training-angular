import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { CoreModule } from '../core/core.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, FeaturesComponent, DetailProductComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    CoreModule,
    NgxPaginationModule
  ],
  exports: [
  ]
})
export class FeaturesModule { }
