import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    FavoriteProductsComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent,
    FavoriteProductsComponent,
    ProfileComponent
  ]
})
export class UserModule { }
