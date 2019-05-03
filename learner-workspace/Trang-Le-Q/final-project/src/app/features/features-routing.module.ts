import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { WomanGuard } from './guard/woman.guard';
import { ManGuard } from './guard/man.guard';
import { KidsGuard } from './guard/kids.guard';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'woman',
        component: CategoryComponent,
        resolve: {
          data: WomanGuard
        }
      },
      {
        path: 'man',
        component: CategoryComponent,
        resolve: {
          data: ManGuard
        }
      },
      {
        path: 'kids',
        component: CategoryComponent,
        resolve: {
          data: KidsGuard
        }
      },
      {
        path: ':category/product/:id',
        component: DetailComponent
      },
      // {
      //   path: '',
      //   redirectTo: '/home',
      //   pathMatch: 'full'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
