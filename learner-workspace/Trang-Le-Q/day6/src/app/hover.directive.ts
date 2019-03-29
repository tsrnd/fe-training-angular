import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @Input('appHover') hoverBtn: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover(this.hoverBtn || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover(null);
  }

  private hover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
