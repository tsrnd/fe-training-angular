import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleContentComponent } from './lifecycle/lifecycle-content/lifecycle-content.component';
import { LifecycleTitleComponent } from './lifecycle/lifecycle-title/lifecycle-title.component';
import { ModalComponent } from './share/modal/modal.component';
import { HoverDirectiveDirective } from './share/directive/hover-directive.directive';
import { NewsComponent } from './features/news/news.component';
import { LimitTextPipe } from './share/pipe/limit-text.pipe';
import {LocalerService} from './core/service/localer.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifecycleComponent,
    LifecycleContentComponent,
    LifecycleTitleComponent,
    ModalComponent,
    HoverDirectiveDirective,
    NewsComponent,
    LimitTextPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
