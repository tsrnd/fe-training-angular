import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account.component';
import { AuthService } from '../core/service/auth.service';

@NgModule({
  declarations: [ AccountComponent, ProfileComponent, DashboardComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
})
export class AccountModule { }
