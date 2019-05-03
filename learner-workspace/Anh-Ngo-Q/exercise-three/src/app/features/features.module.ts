import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { NewsComponent } from './news/news.component';
import { ApiService } from '../core/services/api.service';
import { LocalerService } from '../core/services/localer.service';
import { FeaturesComponent } from './features.component';
import { CoreModule } from '../core/core.module';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleTitleComponent } from './lifecycle-title/lifecycle-title.component';
import { LifecycleContentComponent } from './lifecycle-content/lifecycle-content.component';

@NgModule({
  declarations: [
    NewsComponent,
    FeaturesComponent,
    LifecycleHooksComponent,
    LifecycleTitleComponent,
    LifecycleContentComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FeaturesRoutingModule
  ],
  providers: [],
  exports: []
})
export class FeaturesModule { }
