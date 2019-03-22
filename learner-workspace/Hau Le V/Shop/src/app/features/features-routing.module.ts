import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ChildrenComponent } from './children/children.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { ResolveProductService } from './product-details/resolve-product.service';

const routes: Routes = [
  {
    path:'',
    component: FeaturesComponent,
    children: [
      {
        path:'', component: HomeComponent
      },
      {
        path:'men', component: MenComponent, data: {title: "title"}
      },
      {
        path:'women', component: WomenComponent
      },
      {
        path:'children', component: ChildrenComponent
      },
      {
        path:'product/:id', component: ProductDetailsComponent
        // resolve: {dddd: ResolveProductService}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
