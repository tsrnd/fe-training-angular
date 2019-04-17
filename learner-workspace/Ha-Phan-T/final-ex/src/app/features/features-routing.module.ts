import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturesComponent } from './features.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'men',
        component: ListProductsComponent
      },
      {
        path: 'women',
        component: ListProductsComponent
      },
      {
        path: 'children',
        component: ListProductsComponent
      },
      {
        path: ':cat/products/:id',
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
