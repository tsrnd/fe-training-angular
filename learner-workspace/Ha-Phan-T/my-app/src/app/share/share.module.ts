import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { ContentLengthPipe } from './pipes/content-length.pipe';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [HeaderComponent, HoverDirective, FooterComponent, ModalComponent, ContentLengthPipe],
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
