import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsResolverService } from './products/products-resolver.service';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'women',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolverService
    }
  },
  {
    path: 'men',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolverService
    }
  },
  {
    path: 'kids',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolverService
    }
  },
  {
    path: ':type/product/:id',
    component: ProductDetailComponent,
    resolve: {
      products: ProductsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
