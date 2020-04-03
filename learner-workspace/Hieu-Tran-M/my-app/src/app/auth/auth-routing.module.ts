import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from '../account/guard.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [GuardGuard],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
