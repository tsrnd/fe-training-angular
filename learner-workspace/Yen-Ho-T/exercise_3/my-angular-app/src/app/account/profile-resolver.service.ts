import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, from } from 'rxjs';
import { ApiService } from '../core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any> {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    var pro: any;
    return from(this.apiService.get('users/2').then( profile => {
      return profile || EMPTY;
    }));
  }
}
