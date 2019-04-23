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
  p = 1;

  constructor(
    private localService: LocalerService,
    private route: ActivatedRoute,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    // favorite save local: [{"userId":3,"listIdProduct":[7,8]}, {"userId":1,"listIdProduct":[2,7,5]}]
    this.currentUser = this.commonService.checkCurrentUser(); // get currentUser
    this.data = this.localService.getLocalStorage(KEY.favorite); // get favorite was save local
    if (this.data) {
      this.data = this.data.find(ob => ob.userId === this.currentUser.id); // get ob of currentUser
    }
    this.data = this.data ? this.data.listIdProduct : ''; // get list id favorite of currentUser

    this.route.data // resolve
      .subscribe(data => {
        this.products = data.products;
      });

    if (this.data && this.data.length !== 0) {
      this.data = this.products.filter(item => this.data.includes(item.id)); // get value of product by id in products.json
      this.show = false;
    }
  }

  delItem(id) {
    this.data = this.commonService.removeFavorite(this.data, id);

    if (this.data.length === 0) {
      this.show = true;
    }
  }

  showModalItem(id) {
    this.comfirmModal.item = this.data.find(item => item.id === id);
  }
}
