import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AccountGuard } from './account.guard';
import { AccountComponent } from './account.component';
import { ProfileGuard } from './profile.guard';
import { ProfileprefetchGuard } from './profileprefetch.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: 'account',
  component: AccountComponent,
  canActivate: [AccountGuard],
  // canActivateChild: [AccountGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canDeactivate: [ProfileGuard],
      resolve: {
        user: ProfileprefetchGuard
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
