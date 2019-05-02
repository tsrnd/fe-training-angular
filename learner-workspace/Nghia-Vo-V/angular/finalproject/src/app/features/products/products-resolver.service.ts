import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.apiService.getAssets('products.json');
  }
}
