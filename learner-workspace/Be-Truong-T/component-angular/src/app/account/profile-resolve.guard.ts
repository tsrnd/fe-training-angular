import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolveGuard implements Resolve<any> {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log(this.apiService.get('Account/2'));
    return this.apiService.get('users/2');
  }
}
