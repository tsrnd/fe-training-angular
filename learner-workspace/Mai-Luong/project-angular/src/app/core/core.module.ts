import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ModalComponent } from './modal/modal.component';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    CoreComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    ModalComponent
  ]
})
export class CoreModule { }
