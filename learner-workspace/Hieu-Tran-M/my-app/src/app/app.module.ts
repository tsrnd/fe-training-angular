import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { AppLifecycleTitleComponent } from './app-lifecycle-title/app-lifecycle-title.component';
import { AppLifecycleContentComponent } from './app-lifecycle-title/app-lifecycle-content/app-lifecycle-content.component';
import { AppModalComponent } from './app-modal/app-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    AppLifecycleTitleComponent,
    AppLifecycleContentComponent,
    AppModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
