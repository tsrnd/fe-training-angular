import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() hoverColor: string;
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null);
  }

  hover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
