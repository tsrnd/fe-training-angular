import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import { NavLeftComponent } from './nav-left/nav-left.component';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, AccountComponent, NavLeftComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    ProfileComponent,
    AccountComponent,
    NavLeftComponent,
  ],
})
export class AccountModule { }
