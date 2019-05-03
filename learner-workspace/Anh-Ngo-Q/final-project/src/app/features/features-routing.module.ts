import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListResolverService } from '../core/resolvers/product-list-resolver.service';
import { ProductDetailResolverService } from '../core/resolvers/product-detail-resolver.service';

const routes: Routes = [{
  path: '',
  component: FeaturesComponent,
  children: [
    { path: 'home', component: HomeComponent },
    {
      path: ':type/:page',
      component: ListProductComponent,
      resolve: {
        data: ProductListResolverService
      }
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: ':type/product/:id',
      component: ProductDetailComponent,
      resolve: {
        data: ProductDetailResolverService
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
