import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService, ENDPOINT } from '../core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverDashboardService {

  constructor(private router: Router,
  private api: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    return this.api.get(ENDPOINT.users);
  }
}
