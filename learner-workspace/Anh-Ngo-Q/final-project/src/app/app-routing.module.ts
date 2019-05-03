import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { AuthenticateGuard } from './core/guards/authenticate.guard';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
    canLoad: [AuthenticateGuard],
  },
  {
    path: '',
    loadChildren: './features/features.module#FeaturesModule'
  },
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
