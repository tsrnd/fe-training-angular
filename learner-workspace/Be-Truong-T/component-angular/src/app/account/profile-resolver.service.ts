import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService, END_POINT } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService {

  constructor(private api: ApiService) { }

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.api.get(END_POINT.users);
  }
}
