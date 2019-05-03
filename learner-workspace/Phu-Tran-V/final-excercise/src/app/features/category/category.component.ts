import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/service/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  woman;
  // man;
  // kid;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.get('category/1/product?p=1&l=4').subscribe(data => this.woman = data);
    console.log(this.woman)
    // this.api.get('category/1/product?p=1&l=4').subscribe(data => this.man = data);
    // this.api.get('category/1/product?p=1&l=4').subscribe(data => this.kid = data);
  }

}
