import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/service/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  woman;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.get('category/1/product?p=1&l=4').subscribe(data => this.woman = data);
  }

}
