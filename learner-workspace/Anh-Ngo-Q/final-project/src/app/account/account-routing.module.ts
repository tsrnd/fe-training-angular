import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthenticateGuard } from '../core/guards/authenticate.guard';
import { CanDeactiveProfileGuard } from '../core/guards/can-deactive-profile.guard';

const routes: Routes = [{
  path: '',
  component: AccountComponent,
  canActivate: [AuthenticateGuard],
  canActivateChild: [AuthenticateGuard],
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canDeactivate: [CanDeactiveProfileGuard]
    },
    {
      path: 'favorites',
      component: FavoritesComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
