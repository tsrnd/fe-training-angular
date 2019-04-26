import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UtilService } from 'src/app/core/services/util.service';

const TYPE = {
  women: 1,
  men: 2,
  kid: 3
};

const RESULT_EACH_ROW = 4;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  listProduct;

  currenType;

  currentPage;

  constructor(
    private http: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(v => this.listProduct = this.util.chunkData(v.data, RESULT_EACH_ROW));
    this.currentPage = {
      page: this.route.snapshot.paramMap.get('page'),
      type: this.route.snapshot.paramMap.get('type')
    };

    // return to top when route change
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.currentPage = {
          page: this.route.snapshot.paramMap.get('page'),
          type: this.route.snapshot.paramMap.get('type')
        };
        scrollTo(0, 0);
      }
    });
  }
}
