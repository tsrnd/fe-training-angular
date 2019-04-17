import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tittle = 'Star World';
  woman: any[];
  man: any[];
  kids: any[];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.get('/category/1/product?p=1&l=6').subscribe(data => this.man = data);
    this.api.get('/category/2/product?p=1&l=6').subscribe(data => this.woman = data);
    this.api.get('/category/3/product?p=1&l=6').subscribe(data => this.kids = data);
  }

}
