import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  value: any;
  @Input() data;
  title: string;
  type: string;
  products: any;
  currentUser: any;
  show: boolean;
  p = 1;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService) {
  }

  ngOnInit() {
    // get current user
    this.show = !!this.authService.getCurrentUser();
    this.currentUser = this.commonService.checkCurrentUser();

    // tslint:disable-next-line: no-conditional-assignment
    this.type = this.route.snapshot.routeConfig.path; // get category cloth

    if (this.type) { // get products by category(type)
      this.route.data
        .subscribe(data => {
          this.products = data.products;
        });
      this.data = this.products.filter(item => item.type === this.type);

    }

    this.title = this.data[0].type; // title category(type)

  }

  // add my favorite
  myfavorites(id) {
    this.commonService.addFavorite(id);
  }

  checkFavorite(id) {
    return this.commonService.showButtonFavorite(id);
  }

}
