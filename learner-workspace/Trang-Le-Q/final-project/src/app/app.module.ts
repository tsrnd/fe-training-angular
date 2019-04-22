import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from './account/account.module';
import { FeaturesComponent } from './features/features.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FeaturesComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    FeaturesModule,
    AccountModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
