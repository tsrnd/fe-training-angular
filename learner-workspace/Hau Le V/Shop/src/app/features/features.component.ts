import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  public data:any;
  constructor() { }

  ngOnInit() {
    // document.documentElement.scrollTop = 0
    // window.scrollTo(0, 0);
  }

}
