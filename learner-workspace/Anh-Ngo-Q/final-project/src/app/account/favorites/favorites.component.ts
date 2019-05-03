import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteList;

  constructor(
    private prodService: ProductService,
    private util: UtilService
  ) { }

  ngOnInit() {
    const productPerRow = 3;
    this.favoriteList = this.util.chunkData(this.prodService.getFavoriteList(), productPerRow);
  }

  removeItem(e) {
    const removedArray = (this.favoriteList as Array<any>).concat.apply([], this.favoriteList).filter(v => {
      return v.id !== e;
    });

    this.favoriteList = this.util.chunkData(removedArray, 3);
  }
}
