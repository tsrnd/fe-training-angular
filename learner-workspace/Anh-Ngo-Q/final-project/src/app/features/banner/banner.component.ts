import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  imageUrls: (string | IImage)[] = [];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = true;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;

  constructor(
    private http: ApiService
  ) { }

  ngOnInit() {
    this.http.get('/type/1/products?sortBy=rate&order=desc&page=1&limit=5').subscribe(datas => {
      datas.forEach(v => {
        const slide = {
          url: v.image,
          caption: v.name,
          href: 'https://facebook.com'
        };
        this.imageUrls.push(slide);
      });
    });
  }
}
