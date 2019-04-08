import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountGuard } from './guard/account.guard';
import { ProfileGuard } from './guard/profile.guard';
import { ResolveGuard } from './guard/resolve.guard';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AccountGuard],
    canActivateChild: [AccountGuard],
    children : [
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [ProfileGuard],
        resolve: {
          user: ResolveGuard
        }
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
