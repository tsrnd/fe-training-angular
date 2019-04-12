import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ListProductResolveService } from './home/list-product-resolve.service';
import { ProductsResolveService } from './products/products-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: {
          products: ListProductResolveService
        }
      },
      {
        path: 'women',
        component: ProductsComponent,
        resolve: {
          products: ProductsResolveService
        }
      },
      {
        path: 'men',
        component: ProductsComponent,
        resolve: {
          products: ProductsResolveService
        }
      },
      {
        path: 'children',
        component: ProductsComponent,
        resolve: {
          products: ProductsResolveService
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
