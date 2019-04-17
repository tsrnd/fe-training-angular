import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  dataSlide = [
    {
      "id": "1",
      "categoryId": "1",
      "name": "name 1",
      "image": "http://lorempixel.com/640/480/nightlife",
      "price": 52
    },
    {
      "id": "2",
      "categoryId": "2",
      "name": "name 2",
      "image": "http://lorempixel.com/640/480/abstract",
      "price": 98
    },
    {
      "id": "3",
      "categoryId": "3",
      "name": "name 3",
      "image": "http://lorempixel.com/640/480/technics",
      "price": 3
    }];
  imageUrls: (IImage)[] = [
    { url: '', caption: '', href: '' },
    // { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('custom click function') },
    { url: '', caption: '', href: '' },
    { url: '', caption: '', href: '' }
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  // backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;

  constructor() { }

  ngOnInit() {
    for (var i = 0; i < this.imageUrls.length; i++) {
      this.imageUrls[i].url = this.dataSlide[i].image;
      this.imageUrls[i].caption = this.dataSlide[i].name;
    }
  }

}
