import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  title = 'Detail product';
  data: any;
  product: any;
  id: number;
  listSuggest: any;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService) {
  }

  ngOnInit() {

    this.route.data
      .subscribe(data => {
        this.data = data.products;
      });
    this.route.paramMap.subscribe(data => {
      this.id = Number(data.params.id);
    });
    this.product = this.data.find(item => item.id === this.id);
    this.listSuggest = this.data.filter(item => item.type === this.product.type && item.id !== this.id);
  }

  addFavorite(id) {
    this.commonService.addFavorite(id);
  }
}
