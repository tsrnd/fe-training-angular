import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalerService } from 'src/app/core/service/localer.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteGuard implements Resolve<any> {
  constructor(
    private local: LocalerService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.local.getLocalStorage('favorite');
  }
  
}
