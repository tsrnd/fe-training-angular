import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverItemDirective } from './shared/directive/hover-item.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './shared/component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HoverItemDirective,
    FeaturesComponent,
    AuthComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FeaturesModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
