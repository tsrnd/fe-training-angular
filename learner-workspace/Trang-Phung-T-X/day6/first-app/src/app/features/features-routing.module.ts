import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FeaturesComponent } from './features.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { DirectiveComponent } from './directive/directive.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: NewsComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'lifecycle-hook',
        component: LifecycleHookComponent
      },
      {
        path: 'directive',
        component: DirectiveComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
