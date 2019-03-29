import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightButton]'
})
export class HighlightButtonDirective {
  constructor(private el: ElementRef) { }

// tslint:disable-next-line: no-input-rename
  @Input() appHighlightButton: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.appHighlightButton || this.defaultColor || 'pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null);
  }

  private hover(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
