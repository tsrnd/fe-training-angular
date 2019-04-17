import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { LifecycleContentComponent } from './lifecycle-hooks/lifecycle-content/lifecycle-content.component';
import { LifecycleTitleComponent } from './lifecycle-hooks/lifecycle-title/lifecycle-title.component';

@NgModule({
  declarations: [ParentComponent, LifecycleHooksComponent, ChildComponent, LifecycleContentComponent, LifecycleTitleComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
  ],
  exports: [
    // ChildComponent
  ]
})
export class FeatureModule { }
