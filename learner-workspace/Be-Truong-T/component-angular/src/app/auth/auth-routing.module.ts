import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: CreateComponent
      }
    ]
}];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AuthRoutingModule { }
