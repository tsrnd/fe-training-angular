import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'a',
        component: HomeComponent
      },
      {
        path: 'category',
        component: CategoryComponent
        // redirectTo: 'home',
        // pathMatch: 'full'
      },
      {
        path: 'category/:id',
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
