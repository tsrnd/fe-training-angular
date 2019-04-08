import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  constructor(
    private api: ApiService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.get('users/2');
  }

}
