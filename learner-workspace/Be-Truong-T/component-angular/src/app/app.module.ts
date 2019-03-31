import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLifecycleTitleComponent } from './app-lifecycle-title/app-lifecycle-title.component';
import { AppLifecycleContentComponent } from './app-lifecycle-content/app-lifecycle-content.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { HoverItemDirective } from './shared/directive/hover-item.directive';
import { WordLimitPipe } from './shared/pipe/word-limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppLifecycleTitleComponent,
    AppLifecycleContentComponent,
    AppModalComponent,
    HoverItemDirective,
    WordLimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
