import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    FeaturesModule,
    AuthModule,
    AccountModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
