import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangecolorbuttonDirective } from './changecolorbutton.directive';
import { LimitcontentPipe } from './limitcontent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChangecolorbuttonDirective,
    LimitcontentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
