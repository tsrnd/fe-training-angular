import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {
  el: ElementRef;
  color: string;
  @Input() defaultColor: string;

  @Input('appHoverItem') varChangeColor: string;
  constructor(el: ElementRef) {
    this.el = el;
    this.el.nativeElement.style.color = 'black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.varChangeColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
