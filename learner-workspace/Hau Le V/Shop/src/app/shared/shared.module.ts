import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormatTextPipe } from './pipe/format-text.pipe';
import { CardComponent } from './card/card.component';
import { HoverShowDirective } from './hover-show.directive';
import { SlideshowComponent } from './slideshow/slideshow.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [HeaderComponent,FooterComponent, FormatTextPipe, CardComponent, HoverShowDirective, SlideshowComponent, MiniCardComponent,ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    SlideshowModule
  ],
  exports: [HeaderComponent,FooterComponent, FormatTextPipe, CardComponent, HoverShowDirective, SlideshowComponent, MiniCardComponent,ModalComponent]
})
export class SharedModule { }
