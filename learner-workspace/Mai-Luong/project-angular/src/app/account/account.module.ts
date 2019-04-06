import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ProfileComponent } from '../account/profile/profile.component';
import { DashboardComponent } from '../account/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AccountComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
