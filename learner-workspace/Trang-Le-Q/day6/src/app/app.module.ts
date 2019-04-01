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
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { from } from 'rxjs';
import { Ex9Component } from './ex9/ex9.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    PowerPipe,
    Ex1Component,
    CompactPipe,
    Ex2Component,
    Ex9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
