import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LifecycleTitleComponent } from './lifecycle-title/lifecycle-title.component';
import { LifecycleContentComponent } from './lifecycle-content/lifecycle-content.component';
import { ModalComponent } from './modal/modal.component';
import { HoverDirective } from './share/directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifecycleTitleComponent,
    LifecycleContentComponent,
    ModalComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
