import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleTitleComponent } from './lifecycle-title/lifecycle-title.component';
import { LifecycleContentComponent } from './lifecycle-content/lifecycle-content.component';
import { ModalComponent } from './modal/modal.component';
import { HoverItemDirective } from './shared/hover-item.directive';
import { PipePipe } from './shared/pipe/pipe.pipe';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleTitleComponent,
    LifecycleContentComponent,
    ModalComponent,
    HoverItemDirective,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
