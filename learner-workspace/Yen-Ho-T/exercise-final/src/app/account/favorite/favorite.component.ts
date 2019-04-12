import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from './../../core/service/api.service';
import { LocalerService } from './../../core/service/localer.service';
import $ from 'jquery';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit, AfterViewInit {
  products: any;
  page = 1;
  perPage = 6;
  constructor(
    private apiService: ApiService,
    private localerService: LocalerService,
  ) {
    apiService.getAssets('data/products.json').then( ob => {
      const likeProducts = JSON.parse(this.localerService.getLocalStorage('LIKE_PRODUCTS'));
      this.products = likeProducts && ob ? ob.filter(ele => {
        return likeProducts.includes(ele.id);
      }) : this.products;
    }).catch( (err) => {
      console.log(err);
    });
  }
  removeLikeProduct(index) {
    const likeProducts = [];
    this.products.splice(Number(index), 1);
    this.products.forEach(element => {
      likeProducts.push(element.id);
    });
    this.localerService.saveLocalStorage('LIKE_PRODUCTS', JSON.stringify(likeProducts));
  }
  addListenerRemoveLikeProduct() {
    $(document).ready(() => {
      $('.remove-like').click((e) => {
        e.stopPropagation();
        e.preventDefault();
        this.removeLikeProduct(e.target.id);
      });
    });
  }
  pageChanged(page: number) {
    this.addListenerRemoveLikeProduct();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.addListenerRemoveLikeProduct();
  }
}
