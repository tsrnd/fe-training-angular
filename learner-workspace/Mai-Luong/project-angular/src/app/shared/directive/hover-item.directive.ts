import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {
  @Input('appHoverItem') highlightColor: string;
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.custumAttr(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.custumAttr(null);
  }

  custumAttr(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
