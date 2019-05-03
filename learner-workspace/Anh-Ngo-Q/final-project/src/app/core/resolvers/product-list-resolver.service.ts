import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { CoreModule } from '../core.module';

const TYPE = {
  women: 1,
  men: 2,
  kid: 3
};

const LIMIT_RESULT = 12;

@Injectable({
  providedIn: CoreModule
})
export class ProductListResolverService implements Resolve<any> {

  constructor(
    private router: Router,
    private http: ApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const type = route.paramMap.get('type');
    const page = route.paramMap.get('page');

    if (!(type in TYPE)) {
      this.router.navigate([`${type}`]);
      return EMPTY;
    }

    return this.http.get(`/type/${TYPE[type]}/products?p=${page}&l=${LIMIT_RESULT}`);
  }
}
