import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    ProfileComponent
  ],
  providers: [CanDeactivateGuard]
})
export class AccountModule { }
