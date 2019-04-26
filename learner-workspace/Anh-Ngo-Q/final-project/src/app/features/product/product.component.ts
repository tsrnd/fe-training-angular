import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;
  @Output() productEvent = new EventEmitter<number>();

  isFavorite;

  constructor(
    public auth: AuthService,
    private prodService: ProductService
  ) { }

  ngOnInit() {
    this.isFavorite = this.prodService.getFavoriteStatus(this.product.data.id);
  }

  favorite() {
    this.isFavorite = !this.isFavorite;
    if (!this.isFavorite) {
      this.productEvent.emit(this.product.data.id);
    }
    this.prodService.toggleFavorite({ ...this.product.data, type: this.product.type }, this.isFavorite);
  }
}
