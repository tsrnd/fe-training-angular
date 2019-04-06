import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleContentComponent } from './lifecycle-hooks/lifecycle-content/lifecycle-content.component';
import { LifecycleTitleComponent } from './lifecycle-hooks/lifecycle-title/lifecycle-title.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './home/child/child.component';
import { HoverComponent } from './directive/hover/hover.component';
import { HoverItemDirective } from '../shared/directive/hover-item.directive';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { PipePipe } from '../shared/pipe/pipe.pipe';
import { LocalComponent } from './directive/local/local.component';
import { FormsModule } from '@angular/forms';
import { ApiservicepipeComponent } from './directive/apiservicepipe/apiservicepipe.component';
import { EventComponent } from './events/event/event.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    LifecycleHooksComponent,
    LifecycleTitleComponent,
    LifecycleContentComponent,
    HomeComponent,
    ChildComponent,
    HoverComponent,
    HoverItemDirective,
    PipeComponent,
    PipePipe,
    LocalComponent,
    ApiservicepipeComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule,
    FormsModule
  ],
})
export class FeaturesModule { }
