import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompactPipe } from './pipe/compact.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CompactPipe],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class CoreModule { }
