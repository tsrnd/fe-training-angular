import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  slide: any[];
  constructor(
    private api: ApiService,

  ) { }

  ngOnInit() {
    this.api.get('category/1/product?p=1&l=3').subscribe(data => this.slide = data);
  }

}
