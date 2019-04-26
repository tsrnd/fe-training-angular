import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProfileComponent } from 'src/app/account/profile/profile.component';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class CanDeactiveProfileGuard implements CanDeactivate<ProfileComponent> {
  canDeactivate(component: ProfileComponent) {
    return component.profileForm.dirty ? confirm('Do you want to leave this page?') : true;
  }
}
