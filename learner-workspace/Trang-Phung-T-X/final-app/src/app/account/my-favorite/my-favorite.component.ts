import { Component, OnInit } from '@angular/core';
import { LocalerService, KEY } from 'src/app/core/services/localer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.component.html',
  styleUrls: ['./my-favorite.component.css']
})
export class MyFavoriteComponent implements OnInit {
  title = 'My favorite';
  data: any;
  products: any;
  show = true;
  constructor(
    private localService: LocalerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data = this.localService.getLocalStorage(KEY.favorite);
    this.route.data
      .subscribe(data => {
        this.products = data.products;
      });
    if (this.data.length !== 0) {
      this.data = this.products.filter(item => this.data.includes(item.id));
      this.show = false;
    }
  }

  removeMyfavorites(id) {
    if (id) {
      this.data = this.data.filter(item => {
        return item.id !== id;
      });
    }

    // update local
    this.localService.removeLocalStorage(KEY.favorite);
    this.localService.saveLocalStorage(KEY.favorite, this.data.id || []);

    if (this.data.length === 0) {
      this.show = true;
    }
  }

}
