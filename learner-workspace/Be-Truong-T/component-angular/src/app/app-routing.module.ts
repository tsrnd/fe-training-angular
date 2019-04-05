import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AuthComponent } from './auth/auth.component';

const routers: Routes = [
  {
    path: '',
    component: FeaturesComponent
  },
  {
    path: 'auth',
    component: AuthComponent
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
