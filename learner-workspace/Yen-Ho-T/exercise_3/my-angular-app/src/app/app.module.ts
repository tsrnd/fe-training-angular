import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleContentComponent } from './lifecycle/lifecycle-content/lifecycle-content.component';
import { LifecycleTitleComponent } from './lifecycle/lifecycle-title/lifecycle-title.component';
import { ModalComponent } from './share/modal/modal.component';
import { HoverDirectiveDirective } from './share/directive/hover-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifecycleComponent,
    LifecycleContentComponent,
    LifecycleTitleComponent,
    ModalComponent,
    HoverDirectiveDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
