import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';
import { LocalerService, KEY } from 'src/app/core/services/localer.service';

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
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private localService: LocalerService) {
  }

  ngOnInit() {
    this.currentUser = this.localService.getLocalStorage(KEY.currentUser);
    // get all products
    this.route.data
      .subscribe(data => {
        this.data = data.products;
      });
    // get id in url
    this.route.paramMap.subscribe(data => {
      this.id = Number(data.params.id);
    });
    // get product by id
    this.product = this.data.find(item => item.id === this.id);
    // get products same category except
    this.listSuggest = this.data.filter(item => item.type === this.product.type && item.id !== this.id).slice(0, 4);
  }

  // add my favorite
  addFavorite(id) {
    this.commonService.addFavorite(id);
  }
}
