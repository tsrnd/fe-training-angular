import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  title = 'Detail product';
  data: any;
  product: any;
  id: number;
  listSuggest: any;
  currentUser: any;
  show: boolean;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.currentUser = this.commonService.checkCurrentUser();
    this.show = !!this.authService.getCurrentUser();

    this.route.data
      .subscribe(data => {
        this.data = data.products;

        this.id = +this.route.snapshot.paramMap.get('id'); // get product by id
        // tslint:disable-next-line: prefer-const
        let type = this.route.snapshot.paramMap.get('type');
        this.product = this.data.find(item => item.id === this.id);
        if (type !== this.product.type) {
          return this.router.navigate(['/404']);
        }

        this.listSuggest = this.data.filter(item => item.type === this.product.type && item.id !== this.id).slice(0, 3);
        window.scrollTo(0, 0);
      });
  }

  // add my favorite
  addFavorite(id) {
    this.commonService.addFavorite(id);
  }

  checkFavorite(id) {
    return this.commonService.showButtonFavorite(id);
  }
}
