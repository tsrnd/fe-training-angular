import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  imageUrls = [
    { url: "assets/images/women/women11.jpg"},
    { url: "assets/images/men/men10.jpg"},
    { url: "assets/images/kid/kid8.jpg"}
  ];
  height: string = '400px';
  showArrows = true;
  autoPlay: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';

  constructor() { }

  ngOnInit() {
  }
}
