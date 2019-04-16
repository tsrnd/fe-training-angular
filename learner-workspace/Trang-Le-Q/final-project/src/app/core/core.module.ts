import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompactPipe } from './pipe/compact.pipe';

@NgModule({
  declarations: [CompactPipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
