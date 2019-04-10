import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from '../auth/can-deactivate.guard';
import { CreateComponent } from '../auth/create/create.component';
import { ProfileResolveGuard } from './profile-resolve.guard';

const routes: Routes = [
{
  path: '',
  component: AccountComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'profile',
      component: ProfileComponent,
      canDeactivate: [CanDeactivateGuard],
      resolve: {
        user: ProfileResolveGuard
      }
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'register',
      component: CreateComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
