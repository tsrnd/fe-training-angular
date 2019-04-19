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

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService) {
  }

  ngOnInit() {
    // get current user
    this.show = !!this.authService.getCurrentUser();
    this.currentUser = this.commonService.checkCurrentUser();
    // get category cloth
    // tslint:disable-next-line: no-conditional-assignment
    this.type = this.route.snapshot.routeConfig.path;
    // get products by category
    if (this.type) {
      this.route.data
        .subscribe(data => {
          this.products = data.products;
        });
      this.data = this.products.filter(item => item.type === this.type);
    }
    // title category
    this.title = this.data[0].type;

  }

  // add my favorite
  myfavorites(id) {
    this.commonService.addFavorite(id);
  }
}
