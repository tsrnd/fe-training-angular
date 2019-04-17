import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, AccountComponent, NavLeftComponent, MyFavoriteComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    ProfileComponent,
    AccountComponent,
    NavLeftComponent,
    MyFavoriteComponent
  ],
})
export class AccountModule { }
