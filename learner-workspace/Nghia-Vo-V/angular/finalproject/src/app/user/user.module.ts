import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    UserComponent,
    FavoriteProductsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    FavoriteProductsComponent,
    ProfileComponent
  ]
})
export class UserModule { }
