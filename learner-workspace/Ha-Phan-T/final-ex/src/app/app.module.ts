import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { SharedComponent } from './shared/shared.component';
import { CoreComponent } from './core/core.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './account/account.component';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    SharedComponent,
    CoreComponent,
    AuthComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    AccountModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
