import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { CanDeactivateGuard } from './auth/can-deactivate.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routers: Routes = [
  {
    path: '',
    component: FeaturesComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  }
  // ,
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // }
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
