import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { HomeComponent } from './home/home.component';
import { HoverComponent } from './directive/hover/hover.component';
import { PipeComponent } from '../features/pipes/pipe/pipe.component';
import { LocalComponent } from '../features/directive/local/local.component';
import { ApiservicepipeComponent } from '../features/directive/apiservicepipe/apiservicepipe.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'hooks',
        component: LifecycleHooksComponent
      },
      {
        path: 'hover',
        component: HoverComponent
      },
      {
        path: 'pipe',
        component: PipeComponent
      },
      {
        path: 'local',
        component: LocalComponent
      },
      {
        path: 'apiservice',
        component: ApiservicepipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
