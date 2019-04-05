import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmDeactiveGuard } from '../features/confirm-deactive.guard';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileResolverService } from './profile-resolver.service';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [ ConfirmDeactiveGuard ],
        resolve: {
          profile: ProfileResolverService
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
