import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// ng g d name_directive
@Directive({
  selector: '[appHighlightButton]'
})
export class HighlightButtonDirective {
  // ElementRef go with HostListener
  constructor(private el: ElementRef) { }

  @Input() appHighlightButton: string;
  @Input() defaultColor: string;

  // HostListener: scope(app-root)
  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.appHighlightButton || this.defaultColor || 'pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null);
  }

  // set color text when hover
  private hover(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
