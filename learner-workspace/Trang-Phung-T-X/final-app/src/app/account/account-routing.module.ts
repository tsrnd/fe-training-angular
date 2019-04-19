import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';
import { CanDeactivateGuard } from './profile/can-deactivate.guard';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';
import { FavoriteResolveService } from './my-favorite/favorite-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    // CanActivate: used to allow or disallow access to parent routes.
    canActivate: [AuthGuard],
    // CanActivateChild: used to allow or disallow access to child routes.
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [CanDeactivateGuard]

      },
      {
        path: 'my-favorite',
        component: MyFavoriteComponent,
        resolve: {
          products: FavoriteResolveService
        }
      },
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
