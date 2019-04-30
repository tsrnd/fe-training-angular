import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../../core/services/api.service'
import { AuthService } from 'src/app/core/services/auth.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';

const CAT_MEN = 1;
const CAT_WOMEN = 2;
const CAT_CHILD = 3;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  dataWomen = [];
  dataMen = [];
  dataChild = [];
  dataCatMen = [];
  dataCatWomen = [];
  dataCatChildren = [];

  @ViewChild('slideshow') slideshow: any;

  constructor(
    private apiSevice: ApiService,
    private authService: AuthService,
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this.apiSevice.get("categories/" + CAT_MEN).subscribe(data => this.dataCatMen = data);
    this.apiSevice.get("categories/" + CAT_MEN + "/products?page=1&limit=4").subscribe(datas => this.dataMen = datas);

    this.apiSevice.get("categories/" + CAT_WOMEN).subscribe(data => this.dataCatWomen = data);
    this.apiSevice.get("categories/" + CAT_WOMEN + "/products?page=1&limit=4").subscribe(datas => this.dataWomen = datas);

    this.apiSevice.get("categories/" + CAT_CHILD).subscribe(data => this.dataCatChildren = data);
    this.apiSevice.get("categories/" + CAT_CHILD + "/products?page=1&limit=4").subscribe(datas => this.dataChild = datas);
  }
}
