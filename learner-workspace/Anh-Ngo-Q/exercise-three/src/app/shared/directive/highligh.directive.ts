import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective {

  @Input('choosenColor') color;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  hoverButton() {
    this.el.nativeElement.style.background = this.color;
  }

  @HostListener('mouseleave')
  leaveButton() {
    this.el.nativeElement.style.background = null;
  }
}
