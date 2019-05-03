import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileprefetchGuard implements Resolve<any> {
  constructor(private api: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.get('api/users/2');
  }
}
