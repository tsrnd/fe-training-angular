import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @ViewChild('slideshow') slideshow: any;
  imageUrls: any[] = [
    { url: '../../assets/image/men.jpg',title:"Men", href: 'http://localhost:4200/men' },
    { url: '../../assets/image/women.jpg', title:"Women", href: 'http://localhost:4200/women'},
    { url: '../../assets/image/children.jpg', title:"Children", href: 'http://localhost:4200/children'}
  ];
  constructor() { }
  ngOnInit() {
    this.slideshow.backgroundPosition = "initial";
  }
  ngAfterViewInit() {
    Array.from(this.slideshow.container.nativeElement.getElementsByTagName("a")).forEach((element)=>{
      // console.log(element);
    })
    
  }

}
