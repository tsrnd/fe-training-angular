import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AccountGuard } from './guard/account.guard';
import { ProfileGuard } from './guard/profile.guard';
import { FavoriteGuard } from './guard/favorite.guard';

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
        canDeactivate: [ProfileGuard]
      },
      {
        path: 'favorite',
        component: FavoriteComponent,
        resolve: {
          data: FavoriteGuard
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
