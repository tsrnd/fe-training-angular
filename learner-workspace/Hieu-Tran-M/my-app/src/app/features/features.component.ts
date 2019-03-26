import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() indexTab: number;
  content: string;

  showContent(): string {
    if (this.indexTab === 0) {
      return this.content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    } else if (this.indexTab === 1) {
      // tslint:disable-next-line:max-line-length
      return this.content = 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    } else {
      // tslint:disable-next-line:max-line-length
      return this.content = 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
