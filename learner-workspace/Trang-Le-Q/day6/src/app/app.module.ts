import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { PowerPipe } from './feature/pipe/power.pipe';
import { FormsModule } from '@angular/forms';
import { Ex1Component } from './ex1/ex1.component';
import { CompactPipe } from './feature/pipe/compact.pipe';
import { Ex2Component } from './ex2/ex2.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    PowerPipe,
    Ex1Component,
    CompactPipe,
    Ex2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
