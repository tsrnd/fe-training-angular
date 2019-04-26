import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './features/news/news.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: 'features', loadChildren: './features/features.module#FeaturesModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }