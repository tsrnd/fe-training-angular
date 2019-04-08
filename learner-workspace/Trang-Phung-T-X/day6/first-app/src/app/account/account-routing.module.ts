import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { AccountGuard } from './account.guard';
import { ProfileResolveGuard } from './profile-resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [AccountGuard],
    canActivateChild: [AccountGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          user: ProfileResolveGuard
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class AccountRoutingModule { }
