import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturesComponent } from './features/features.component';
import { FeaturesModule } from './features/features.module';
import { AuthService } from './core/service/auth.service';
import { ApiService } from './core/service/api.service';
import { DeactiveDialogService } from './core/service/deactive-dialog.service';
import { LocalerService } from './core/service/localer.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FeaturesModule,
    AppRoutingModule
  ],
  providers: [AuthService, ApiService, DeactiveDialogService, LocalerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
