import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesComponent } from './features/features.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }