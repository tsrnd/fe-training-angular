import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { PigsComponent } from './pigs/pigs.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    HomeComponent,
    DogsComponent,
    CatsComponent,
    PigsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
