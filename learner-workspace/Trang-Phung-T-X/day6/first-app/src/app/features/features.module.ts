import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { NewsComponent } from './../features/news/news.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { SharedModule } from '../shared/shared.module';
import { AppLifecycleTitleComponent } from './lifecycle-hook/app-lifecycle-title/app-lifecycle-title.component';
import { AppLifecycleContentComponent } from './lifecycle-hook/app-lifecycle-content/app-lifecycle-content.component';
import { CoreModule } from '../core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    NewsComponent,
    LifecycleHookComponent,
    HomeComponent,
    ButtonsComponent,
    DirectiveComponent,
    AppLifecycleTitleComponent,
    AppLifecycleContentComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  exports: [

  ]
})
export class FeaturesModule { }
