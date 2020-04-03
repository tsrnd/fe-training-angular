import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account.component';
import { CanDeactivateGuard } from '../auth/can-deactivate.guard';
import { GuardGuard } from './guard.guard';
import { ProfileResolveService } from '../core/services/profile-resolve.service';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [GuardGuard],
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          profile: ProfileResolveService // Lấy data trước
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
