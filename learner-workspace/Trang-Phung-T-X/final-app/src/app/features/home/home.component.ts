import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { LocalerService } from 'src/app/core/services/localer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  productsWomen: any;
  productsChildren: any;
  productsMen: any;

  constructor(
    private apiService: ApiService,
    private localService: LocalerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.data = data.products;
      });

    this.productsWomen = this.data.filter(item => item.type === 'women');
    this.productsMen = this.data.filter(item => item.type === 'men');
    this.productsChildren = this.data.filter(item => item.type === 'children');
  }


}
