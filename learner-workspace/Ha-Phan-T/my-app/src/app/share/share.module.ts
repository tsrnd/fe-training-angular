import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ModalComponent],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ModalComponent
  ]
})
export class ShareModule { }
