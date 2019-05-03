import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';

const MAN = 2;

@Injectable({
  providedIn: 'root'
})
export class ManGuard implements  Resolve<any> {
  constructor(
    private api: ApiService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.get('/category/' + MAN + '/product');
  }
}
