import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { NewsComponent } from './news/news.component';
import { BtnLocalerComponent } from './btn-localer/btn-localer.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: 'news', // news/:id
        component: NewsComponent
      },
      {
        path: 'btn-localer',
        component: BtnLocalerComponent
      },
      {
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
