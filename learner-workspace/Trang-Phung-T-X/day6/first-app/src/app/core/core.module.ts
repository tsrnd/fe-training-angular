import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { AppModalComponent } from './app-modal/app-modal.component';
import { LocalerService } from './services/localer.service';
import { DialogService } from './services/dialog.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppModalComponent,
    CommonModule,
    RouterModule
  ],
  providers: [
    ApiService,
    LocalerService,
    AuthService,
    DialogService
  ],
})
export class CoreModule { }
