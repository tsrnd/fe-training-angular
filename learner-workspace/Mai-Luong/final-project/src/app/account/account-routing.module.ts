import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AccountGuard } from './account.guard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [AccountGuard],
    canActivateChild: [AccountGuard],
    children: [
      {
        path: 'account/dashboard',
        component: DashboardComponent
      },
      {
        path: 'account/profile',
        component: ProfileComponent
      },
      {
        path: 'account/favorite',
        component: FavoriteComponent
      },
      {
        path: 'account/edit_profile',
        component: EditProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
