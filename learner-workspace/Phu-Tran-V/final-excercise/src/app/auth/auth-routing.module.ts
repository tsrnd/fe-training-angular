import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{
  path:'auth', component:AuthComponent,
  children:[
    {path:'register', component: RegisterFormComponent},
    {path:'login', component: SignInComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
