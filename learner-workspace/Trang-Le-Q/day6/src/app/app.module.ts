import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirective } from './hover.directive';
import { PowerPipe } from './feature/pipe/power.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ex1Component } from './ex1/ex1.component';
import { CompactPipe } from './feature/pipe/compact.pipe';
import { Ex2Component } from './ex2/ex2.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { from } from 'rxjs';
import { Ex9Component } from './ex9/ex9.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { FeaturesModule } from './features/features.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    PowerPipe,
    Ex1Component,
    CompactPipe,
    Ex2Component,
    Ex9Component,
    NotFoundComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    AccountModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
