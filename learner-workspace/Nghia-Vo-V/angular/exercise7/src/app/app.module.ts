import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangecolorbuttonDirective } from './changecolorbutton.directive';
import { LimitcontentPipe } from './limitcontent.pipe';
import { LocalerService } from './localer.service';

@NgModule({
  declarations: [
    AppComponent,
    ChangecolorbuttonDirective,
    LimitcontentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
