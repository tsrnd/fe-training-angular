import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalerService, KEY } from 'src/app/core/services/localer.service';
import { ActivatedRoute } from '@angular/router';
import { AppModalComponent } from 'src/app/core/app-modal/app-modal.component';
import { CommonService } from 'src/app/core/services/common.service';


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
  currentUser: any;


  constructor(
    private localService: LocalerService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    // get data local
    this.currentUser = this.commonService.checkCurrentUser();
    this.data = this.localService.getLocalStorage(KEY.favorite);
    // favorite of currentUser [{userId: 1, listIdProduct:[1,2,3]},{},{}]
    if (this.data) {
      this.data = this.data.find(ob => ob.userId === this.currentUser.id);
    }
    this.data = this.data ? this.data.listIdProduct : '';
    // resolve
    this.route.data
      .subscribe(data => {
        this.products = data.products;
      });
    // get value of product by id in products.json
    if (this.data && this.data.length !== 0) {
      this.data = this.products.filter(item => this.data.includes(item.id));
      this.show = false;
    }
  }

  delItem(id) {
    let favoriteOtherUser: any;
    let favoriteCurrentUser: any;
    let favoriteLocal: any;
    let favoriteList: any;
    let favoriteCurrentUserNew: any;
    // tslint:disable-next-line: prefer-const
    let value = [];
    // tslint:disable-next-line: prefer-const
    let valueSaveLocal = [];

    if (id) {
      // data = except delItem
      this.data = this.data.filter(item => {
        return item.id !== id;
      });
    }

    // update local
    this.data.map(item => value.push(item.id));
    // get all favorites of all users
    favoriteLocal = this.localService.getLocalStorage(KEY.favorite);
    favoriteList = favoriteLocal ? favoriteLocal : [];
    favoriteOtherUser = favoriteList.filter(item => item.userId !== this.currentUser.id);
    favoriteCurrentUser = favoriteList.find(ob => ob.userId === this.currentUser.id);

    favoriteCurrentUserNew = Object.assign({ userId: this.currentUser.id }, { listIdProduct: value });
    valueSaveLocal.push(favoriteCurrentUserNew);
    if (favoriteOtherUser.length !== 0) {
      valueSaveLocal.push(favoriteOtherUser);
    }
    this.localService.removeLocalStorage(KEY.favorite);
    this.localService.saveLocalStorage(KEY.favorite, valueSaveLocal);

    if (this.data.length === 0) {
      this.show = true;
    }

  }

  showModalItem(id) {
    this.comfirmModal.item = this.data.find(item => item.id === id);
  }
}
