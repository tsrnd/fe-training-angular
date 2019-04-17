import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalerService, KEY } from 'src/app/core/services/localer.service';
import { ActivatedRoute } from '@angular/router';
import { AppModalComponent } from 'src/app/core/app-modal/app-modal.component';


@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.component.html',
  styleUrls: ['./my-favorite.component.css']
})
export class MyFavoriteComponent implements OnInit {
  @ViewChild(AppModalComponent) comfirmModal: AppModalComponent;
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

  delItem(id) {
    let value = [];
    if (id) {
      this.data = this.data.filter(item => {
        return item.id !== id;
      });
    }
    this.data.map(item => value.push(item.id));
    // update local
    this.localService.removeLocalStorage(KEY.favorite);
    this.localService.saveLocalStorage(KEY.favorite, value);
    if (this.data.length === 0) {
      this.show = true;
    }

  }

  showModalItem(id) {
    this.comfirmModal.item = this.data.find(item => item.id === id);
  }
}
