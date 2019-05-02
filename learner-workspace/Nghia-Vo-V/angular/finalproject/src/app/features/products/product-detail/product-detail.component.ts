import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  data: any;
  product: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.data = data.products;

        this.id = +this.route.snapshot.paramMap.get('id'); 
        let category = this.route.snapshot.paramMap.get('category');
        this.product = this.data.find(item => item.id === this.id);
        if (category !== this.product.category) {
          return this.router.navigate(['/404']);
        }
      });
  }
}
