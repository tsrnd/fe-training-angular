import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FeaturesRoutingModule } from './features-routing.module';
import { LifeCycleTitleComponent } from './life_cycle_title/life-cycle-title.component';
import { LifeCycleContentComponent } from './life_cycle_title/life-cycle-content/life-cycle-content.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './../shared/directive/highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { CardTitlePipe } from './../shared/pipe/card-title.pipe';
import { CardDescriptionPipe } from './../shared/pipe/card-description.pipe';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LifeCycleTitleComponent,
    LifeCycleContentComponent,
    AppModalComponent,
    DirectiveComponent,
    HighlightDirective,
    PipeComponent,
    CardTitlePipe,
    CardDescriptionPipe,
    ServiceComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FeaturesModule { }
