import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompactContentPipe } from './pipe/compact-content.pipe';
import { HighlighDirective } from './directive/highligh.directive';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    CompactContentPipe,
    HighlighDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompactContentPipe,
    HighlighDirective,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
