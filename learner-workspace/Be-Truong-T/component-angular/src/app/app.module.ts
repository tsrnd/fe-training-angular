import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './shared/component/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverItemDirective } from './shared/directive/hover-item.directive';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HoverItemDirective,
    FeaturesComponent,
    AuthComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FeaturesModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
