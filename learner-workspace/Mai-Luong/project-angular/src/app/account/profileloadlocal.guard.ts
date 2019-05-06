import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileloadlocalGuard implements Resolve<any> {
  constructor(
    private service: ApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.service.get('users/2');
  }
}
