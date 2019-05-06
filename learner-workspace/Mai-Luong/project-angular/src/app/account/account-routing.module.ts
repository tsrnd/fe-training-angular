import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from '../account/profile/profile.component';
import { DashboardComponent } from '../account/dashboard/dashboard.component';
import { AccountGuard } from './account.guard';
import { ProfileGuard } from './profile.guard';
import { ProfileloadlocalGuard } from './profileloadlocal.guard';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AccountGuard],
    canActivateChild: [AccountGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [ProfileGuard],
        resolve: {
          user: ProfileloadlocalGuard
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
