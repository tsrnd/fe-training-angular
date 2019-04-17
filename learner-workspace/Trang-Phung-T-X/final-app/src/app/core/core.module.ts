import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { LocalerService } from './services/localer.service';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';
import { AppModalComponent } from './app-modal/app-modal.component';

@NgModule({
  declarations: [
    AppModalComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    AppModalComponent
  ],
  providers: [
    ApiService,
    LocalerService,
    AuthService,
    CommonService
  ],
})
export class CoreModule { }
