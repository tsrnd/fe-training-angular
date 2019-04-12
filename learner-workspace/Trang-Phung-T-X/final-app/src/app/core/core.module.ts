import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { LocalerService } from './services/localer.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ApiService,
    LocalerService,
    AuthService,
  ],
})
export class CoreModule { }
