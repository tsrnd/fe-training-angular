import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';
import {SlideshowModule} from 'ng-simple-slideshow';
@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    FeaturesRoutingModule,
    SlideshowModule
  ],
  exports: [
    CarouselComponent,
    HomeComponent
  ]
})
export class FeaturesModule { }
