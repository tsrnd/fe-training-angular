import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { NewsComponent } from './news/news.component';
import { WordLimitPipe } from './../shared/pipe/word-limit.pipe';
import { BtnLocalerComponent } from './btn-localer/btn-localer.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { AppLifecycleTitleComponent } from './lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component';
import { AppLifecycleContentComponent } from './lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component';
import { AppModalComponent } from './lifecycle-hooks/app-modal/app-modal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    NewsComponent,
    WordLimitPipe,
    BtnLocalerComponent,
    LifecycleHooksComponent,
    AppLifecycleTitleComponent,
    AppLifecycleContentComponent,
    AppModalComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ]
})
export class FeaturesModule { }
