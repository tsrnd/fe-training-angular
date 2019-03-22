import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalerService } from '../../core/service/localer.service';
import { ApiService, ENDPOINT } from '../../core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveProductService implements Resolve<any> {
public data:any;
  constructor(private localer: LocalerService, private api: ApiService, private router: Router, private route: ActivatedRoute){}
 resolve(route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot,
       ): Observable<any> {
        this.route.paramMap.subscribe((params: ParamMap)=>{
          this.api.get(ENDPOINT.products + '/' + parseInt(params.get('id')))
          .subscribe(data => {this.data = data});
        });
        
        
    return this.data;  
  }
}
