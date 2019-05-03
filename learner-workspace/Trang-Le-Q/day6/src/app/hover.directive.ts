import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) { }

  @Input('appHover') hoverBtn: string;
  defaultColor = 'red';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover(this.hoverBtn || this.defaultColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover(null);
  }

  private hover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
