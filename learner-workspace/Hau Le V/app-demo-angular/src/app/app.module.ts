import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LifecycleTitleComponent } from './lifecycle/lifecycle-title/lifecycle-title.component';
import { LifecycleContentComponent } from './lifecycle/lifecycle-content/lifecycle-content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { UpperfirstPipe } from './shared/pipe/upperfirst.pipe';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { FormatContentPipe } from './shared/pipe/format-content.pipe';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FeaturesModule } from './features/features.module';
import { FeaturesComponent } from './features/features.component';
import { SharedModule } from './shared/shared.module';
import { AccountComponent } from './account/account.component';
import {AccountModule} from './account/account.module';
import { AuthComponent } from './auth/auth.component'
import { AuthModule } from './auth/auth.module'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifecycleTitleComponent,
    LifecycleContentComponent,
    LifecycleComponent,
    ModalComponent,
    UpperfirstPipe,
    HighlightDirective,
    FormatContentPipe,
    FeaturesComponent,
    AccountComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AccountModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
