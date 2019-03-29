import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLifecycleTitleComponent } from './features/app-lifecycle-title/app-lifecycle-title.component';
import { AppLifecycleContentComponent } from './features/app-lifecycle-content/app-lifecycle-content.component';
import { AppModalComponent } from './shares/app-modal/app-modal.component';
import { HighlightButtonDirective } from './directive/highlight-button.directive';
import { CollapseTextPipe } from './pipe/collapse-text/collapse-text.pipe';
import { NewsComponent } from './day8/news/news.component';
import { ButtonsComponent } from './day8/buttons/buttons.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppLifecycleTitleComponent,
    AppLifecycleContentComponent,
    AppModalComponent,
    HighlightButtonDirective,
    CollapseTextPipe,
    NewsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
