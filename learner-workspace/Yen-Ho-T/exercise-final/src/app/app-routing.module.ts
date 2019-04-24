import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { FeaturesComponent } from './features/features.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { PreloadSelectModuleService } from './core/service/preload-select-module.service';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent
  },
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule',
    data: {preload: true}
  },
  {
    path: '',
    loadChildren: './account/account.module#AccountModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadSelectModuleService,  useHash: true })],
  exports: [RouterModule],
  providers: [ PreloadSelectModuleService ]
})
export class AppRoutingModule { }
