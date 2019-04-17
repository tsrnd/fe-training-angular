import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { PhutagComponent } from './phutag/phutag.component';
import { ChildComponent } from './child/child.component';
import { LifecycleTitleComponent } from './lifecycle-title/lifecycle-title.component';
import { LifecycleContentComponent } from './lifecycle-content/lifecycle-content.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesComponent } from './features/features.component';
@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    PhutagComponent,
    ChildComponent,
    FeaturesComponent,
    LifecycleTitleComponent,
    LifecycleContentComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    // NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
