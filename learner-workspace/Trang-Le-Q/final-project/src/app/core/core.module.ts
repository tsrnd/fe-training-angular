import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalerPipe } from './pipe/localer.pipe';
import { CompactPipe } from './pipe/compact.pipe';

@NgModule({
  declarations: [LocalerPipe, CompactPipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
