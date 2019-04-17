import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SlideshowComponent],
  imports: [
    CommonModule,
    SlideshowModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlideshowComponent
  ]
})
export class SharedModule { }
