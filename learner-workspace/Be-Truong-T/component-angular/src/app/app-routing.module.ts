import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { CanDeactivateGuard } from './auth/can-deactivate.guard';

const routers: Routes = [
  {
    path: '',
    component: FeaturesComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
