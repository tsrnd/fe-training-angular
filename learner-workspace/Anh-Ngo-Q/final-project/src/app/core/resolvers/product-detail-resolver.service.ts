import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY, merge, interval, forkJoin } from 'rxjs';
import { concat } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { CoreModule } from '../core.module';

const TYPE = {
  women: 1,
  men: 2,
  kid: 3
};

@Injectable({
  providedIn: CoreModule
})
export class ProductDetailResolverService implements Resolve<any> {

  constructor(
    private http: ApiService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const type = route.paramMap.get('type');
    const productID = route.paramMap.get('id');

    const productDetailData = this.http.get(`/type/${TYPE[type]}/products/${productID}`);
    const relatedProducts = this.http.get('/type/1/products?sortBy=rate&order=desc&page=1&limit=4');

    return forkJoin(productDetailData, relatedProducts);
  }
}
