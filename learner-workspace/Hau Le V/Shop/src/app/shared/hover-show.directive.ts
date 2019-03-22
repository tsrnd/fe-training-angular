import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverShow]'
})
export class HoverShowDirective {
  @Input() data:string;

  constructor(private el: ElementRef) { }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.el.nativeElement.getElementsByClassName("stt-icon")[0].style.visibility="visible";
  //   this.el.nativeElement.getElementsByClassName("stt-icon")[0].style.transform="translateY(-10px)";
  // }
 
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.el.nativeElement.getElementsByClassName("stt-icon")[0].style.visibility="hidden";
  //     // setTimeout(()=>{
  //     //   this.el.nativeElement.getElementsByClassName("stt-icon")[0].style.transform="translateY(10px)";
  //     // },500);
  // }
 
}
