import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordComponent } from './word/word.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ChildComponent } from '../../../excercise3-4/src/app/child/child.component';
import { ParentComponent } from './parent.component';
import { Child1Component } from './child1.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { AsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip.component';
import { WeatherComponent } from './weather/weather.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    WordComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    Child1Component,
    CardComponent,
    LearnPipeComponent,
    AsyncPromisePipeComponent,
    RoundPipe,
    IpComponent,
    WeatherComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
