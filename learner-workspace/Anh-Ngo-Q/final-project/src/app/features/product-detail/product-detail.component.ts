import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;

  relatedProducts;

  currentType;

  isFavorite;

  constructor(
    private activeRouter: ActivatedRoute,
    public auth: AuthService,
    private prodService: ProductService
  ) { }

  ngOnInit() {
    this.activeRouter.data.subscribe(v => {
      this.product = v.data[0];
      this.relatedProducts = v.data[1];
      scrollTo(0, 0);
      this.isFavorite = this.prodService.getFavoriteStatus(this.product.id);
    });

    this.currentType = this.activeRouter.snapshot.paramMap.get('type');
  }

  /**
   * Switch favorite status
   */
  favorite() {
    this.isFavorite = !this.isFavorite;
    this.prodService.toggleFavorite({ ...this.product, type: this.currentType }, this.isFavorite);
  }
}
