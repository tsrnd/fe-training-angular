import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './share/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreComponent } from './core/core.component';
import { FeatureComponent } from './feature/feature.component';
import { ShareModule } from './share/share.module';
import { FeatureModule } from './feature/feature.module';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { HoverDirective } from './share/directives/hover.directive';
import { ContentLengthPipe } from './share/pipes/content-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    FeatureComponent,
    NotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule,
    FeatureModule,
    AccountModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
