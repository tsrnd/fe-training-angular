import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  value: any;
  @Input() data;
  title: string;
  type: string;
  products: any;


  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService) {
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
    this.commonService.addFavorite(id);
  }
}
