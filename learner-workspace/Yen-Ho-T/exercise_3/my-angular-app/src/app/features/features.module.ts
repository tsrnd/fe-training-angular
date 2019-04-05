import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { NewsComponent } from './news/news.component';
import { SharedModule } from './../shared/shared.module';
import {ApiService} from './../core/service/api.service';
import { DetailComponent } from './news/detail/detail.component';
import { DeactiveDialogService } from '../core/service/deactive-dialog.service';

@NgModule({
  declarations: [NewsComponent, DetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule
  ],
  providers: [ApiService, DeactiveDialogService]
})
export class FeaturesModule { }
