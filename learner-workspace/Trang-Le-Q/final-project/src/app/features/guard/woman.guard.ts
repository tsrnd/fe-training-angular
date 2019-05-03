import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalerService } from 'src/app/core/service/localer.service';
import { ApiService } from 'src/app/core/service/api.service';

const WOMAN = 1;

@Injectable({
  providedIn: 'root'
})
export class WomanGuard implements Resolve<any> {
  constructor(
    private api: ApiService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.get('/category/' + WOMAN + '/product');
  }
}
