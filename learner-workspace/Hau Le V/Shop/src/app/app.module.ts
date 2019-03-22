import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { FeaturesComponent } from './features/features.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';
import { AccountModule } from './account/account.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    HttpClientModule,
    AuthModule,
    AccountModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
