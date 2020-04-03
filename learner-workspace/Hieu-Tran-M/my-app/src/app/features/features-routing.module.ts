import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features.component';
import { LifeCycleTitleComponent } from './life_cycle_title/life-cycle-title.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ServiceComponent } from './service/service.component';
import { GuardGuard } from '../account/guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    canActivate: [GuardGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'lifecyclehooks',
        component: LifeCycleTitleComponent
      },
      {
        path: 'directive',
        component: DirectiveComponent
      },
      {
        path: 'pipe',
        component: PipeComponent
      },
      {
        canActivateChild: [GuardGuard],
        path: 'service',
        component: ServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
