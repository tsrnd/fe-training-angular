import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { FeaturesComponent } from './features.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: 'news', component: NewsComponent },
      { path: 'lifecycle', component: LifecycleHooksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
