import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SlideshowComponent } from './component/slideshow/slideshow.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SlideshowComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlideshowComponent,
    ContactComponent,
    AboutComponent
  ]
})
export class SharedModule { }
