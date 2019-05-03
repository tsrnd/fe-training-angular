import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalerService } from './services/localer.service';
import { ApiService } from './services/api.service';
import { ModalComponent } from './modals/modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ]
})
export class CoreModule { }
