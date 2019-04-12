import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalerService } from 'src/app/core/services/localer.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  KEY = 'newFavorate';
  value: any;
  @Input() data;
  title: string;
  type: string;
  products: any;


  constructor(
    private apiService: ApiService,
    private localService: LocalerService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {


    // tslint:disable-next-line: no-conditional-assignment
    this.type = this.route.snapshot.routeConfig.path;
    if (this.type) {
      this.route.data
        .subscribe(data => {
          this.products = data.products;
        });
      this.data = this.products.filter(item => item.type === this.type);
    }
    this.title = this.data[0].type;


  }

  myfavorites(id) {
    const valueLocal = this.localService.getLocalStorage(this.KEY);
    // check data in localStorage be has value or null
    const value = valueLocal ? valueLocal : [];
    // check email is exist in local
    // tslint:disable-next-line: only-arrow-functions
    if (valueLocal && valueLocal.find(function (element) {
      return element === id;
    })) {
      return value;
    }
    // push id to arr id in local
    value.push(id);
    // save local
    this.localService.saveLocalStorage(this.KEY, value);
  }

}
