import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: 'features',
    component: FeaturesComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FeaturesRoutingModule { }
