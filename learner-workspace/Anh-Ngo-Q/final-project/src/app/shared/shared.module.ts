import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FooterComponent } from './component/footer/footer.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ]
})
export class SharedModule { }
