import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLifecycleTitleComponent } from './app-lifecycle-title/app-lifecycle-title.component';
import { AppLifecycleContentComponent } from './app-lifecycle-content/app-lifecycle-content.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { HoverItemDirective } from './shared/directive/hover-item.directive';
import { WordLimitPipe } from './shared/pipe/word-limit.pipe';
import { BtnLocalerComponent } from './btn-localer/btn-localer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './account/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLifecycleTitleComponent,
    AppLifecycleContentComponent,
    AppModalComponent,
    HoverItemDirective,
    WordLimitPipe,
    BtnLocalerComponent,
    CreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }