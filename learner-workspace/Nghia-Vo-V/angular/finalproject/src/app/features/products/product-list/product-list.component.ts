import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  value: any;
  @Input() data;
  title: string;
  category: string;
  products: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {

  }

  ngOnInit() {
    this.category = this.route.snapshot.routeConfig.path;

    if (this.category) {
      this.route.data
        .subscribe(data => {
          this.products = data.products;
        });
      this.data = this.products.filter(item => item.category === this.category);

    }

    this.title = this.data[0].category;
  }

}
