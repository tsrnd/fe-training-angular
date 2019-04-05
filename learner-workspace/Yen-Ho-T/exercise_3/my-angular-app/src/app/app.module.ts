import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleContentComponent } from './lifecycle/lifecycle-content/lifecycle-content.component';
import { LifecycleTitleComponent } from './lifecycle/lifecycle-title/lifecycle-title.component';
import {LocalerService} from './core/service/localer.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';
import { FeaturesComponent } from './features/features.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifecycleComponent,
    LifecycleContentComponent,
    LifecycleTitleComponent,
    RegisterComponent,
    LoginComponent,
    FeaturesComponent,
    AuthComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    AccountModule,
    FeaturesModule,
    AppRoutingModule
  ],
  providers: [LocalerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
