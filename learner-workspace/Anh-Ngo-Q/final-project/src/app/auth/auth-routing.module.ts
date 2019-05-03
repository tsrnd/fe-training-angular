import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnauthenticateGuard } from '../core/guards/unauthenticate.guard';
import { AuthenticateGuard } from '../core/guards/authenticate.guard';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  canActivate: [UnauthenticateGuard],
  canActivateChild: [UnauthenticateGuard],
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
