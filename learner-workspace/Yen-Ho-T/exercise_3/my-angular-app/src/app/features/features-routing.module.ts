import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import { FeaturesComponent } from './features.component';
import { DetailComponent } from './news/detail/detail.component';
import { ActiveGuard } from './active.guard';
import { ConfirmDeactiveGuard } from './confirm-deactive.guard';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    canActivate: [ActiveGuard],
    canActivateChild: [ActiveGuard],
    children: [
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'news/:id',
        canDeactivate: [ConfirmDeactiveGuard],
        component: DetailComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
