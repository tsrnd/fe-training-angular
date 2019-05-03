import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';

// 3rd party
import { SlideshowModule } from 'ng-simple-slideshow';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    BannerComponent,
    HomeComponent,
    ProductComponent,
    ListProductComponent,
    PaginationComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SlideshowModule,
    FeaturesRoutingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class FeaturesModule { }
