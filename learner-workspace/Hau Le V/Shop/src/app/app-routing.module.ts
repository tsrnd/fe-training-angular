import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path:'', component: FeaturesComponent
  },
  {
    path:'', component: AuthComponent
  },
  {
    path:'', component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
