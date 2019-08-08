import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from '../auth/can-deactivate.guard';
import { ProfileResolverService } from './profile-resolver.service';

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
        profile: ProfileResolverService
      }
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
