import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LifecycleTitleComponent } from './lifecycle-title/lifecycle-title.component';
import { LifecycleContentComponent } from './lifecycle-content/lifecycle-content.component';
import { ModalComponent } from './modal/modal.component';
import { HighlighDirective } from './highligh.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifecycleTitleComponent,
    LifecycleContentComponent,
    ModalComponent,
    HighlighDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
