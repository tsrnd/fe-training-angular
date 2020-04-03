import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService, ENDPOINT } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService implements Resolve<any> {
  constructor(
    private api: ApiService
  ) {
  }
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.api.get(ENDPOINT.users);
  }
}
