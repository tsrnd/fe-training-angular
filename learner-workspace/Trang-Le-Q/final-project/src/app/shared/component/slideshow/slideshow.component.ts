import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  constructor(
    // private api: ApiService,

  ) { }

  ngOnInit() {
    // let data = this.api.get('users/2').toPromise();
    // console.log(data);
  }

}
