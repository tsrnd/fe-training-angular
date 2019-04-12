import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import $ from 'jquery';
import { ApiService } from './../../core/service/api.service';
import { LocalerService } from './../../core/service/localer.service';
import { AuthService } from './../../core/service/auth.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @Input() category: string;
  @Input() limit: number;
  @Input() isCategoryInMiddle = true;
  @Input() isShowCategory = true;
  @Input() exceptProductID = null;
  page = 1;
  perPage = 12;
  products = [];
  constructor(
    private apiService: ApiService,
    private localerService: LocalerService,
    private acroute: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {
    // reload when access same route
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    apiService.getAssets('data/products.json').then( ob => {
      const likeProducts = JSON.parse(this.localerService.getLocalStorage('LIKE_PRODUCTS'));
      if (this.category) {
        this.products = getProducts(ob, likeProducts, this.category, this.limit, this.page, this.exceptProductID);
        return;
      }
      this.acroute.queryParamMap.subscribe(params => {
        this.page = Number(params.get('page')) || this.page;
        this.category = this.router.url.split(/[/?]/)[1];
        this.products = getProducts(ob, likeProducts, this.category, null, this.page, this.exceptProductID);
        console.log(this.products);
      });
    }).catch( (err) => {
      console.log(err);
    });
  }
  ngOnInit() {
  }
  pageChanged(page: number) {
    this.addListenerProduct();
  }
  ngAfterViewInit() {
    this.addListenerProduct();
  }
  addToCart(id, e) {
    e.stopPropagation();
    e.preventDefault();
  }
  likeOrUnLike(index) {
    let likeProducts = JSON.parse(this.localerService.getLocalStorage('LIKE_PRODUCTS')) || [];
    this.products[index].isLiked = !this.products[index].isLiked;
    if (this.products[index].isLiked) {
      likeProducts.push(this.products[index].id);
    } else {
      likeProducts = likeProducts.filter((productId) => {
        return productId !== this.products[index].id;
      });
    }
    this.localerService.saveLocalStorage('LIKE_PRODUCTS', JSON.stringify(likeProducts));
  }
  addListenerProduct() {
    $(document).ready(() => {
      $('.add-cart-image').mouseenter(function(e) {
        $(this).children('.add-cart').fadeIn( 100 );
        $(this).children('.add-cart').css('animation', 'move-top 0.5s ease');
        $(this).addClass('black-blur');
      });
      $('.add-cart-image').mouseleave(function(e) {
        $(this).children('.add-cart').css('animation', 'move-down 0.5s ease');
        $(this).removeClass('black-blur');
        setTimeout(() => {
          $(this).children('.add-cart').css('display', 'none');
        }, 300);
      });
      $('.heart').click((e) => {
        this.likeOrUnLike(e.target.id);
      });
    });
  }
}

function getProducts(ob: any, likeProducts: any, category: string, limit: number, page: number, exceptProductID: number) {
  let products = exceptProductID ? ob.filter(item => {
    return item.category === category && item.id !== exceptProductID;
  }) : ob.filter(item => {
    return item.category === category;
  });
  products = limit ? products.splice((page - 1) * limit, (page - 1) * limit + limit) : products;
  products = likeProducts ? products.map(ele => {
    ele.isLiked = (likeProducts.includes(ele.id)) ? true : false;
    return ele;
  }) : products;

  return products;
}
