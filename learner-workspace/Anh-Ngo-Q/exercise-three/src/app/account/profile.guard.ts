import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanDeactivate<ProfileComponent> {

  canDeactivate(component: ProfileComponent) {
    if (component.isChanged()) {
      return confirm('Your input will be delete?');
    }
    return true;
  }
}
