import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangecolorbutton]'
})
export class ChangecolorbuttonDirective {

  constructor(private el: ElementRef) { }

  @Input('appChangecolorbutton') ChangecolorbuttonColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.Changecolorbutton(this.ChangecolorbuttonColor || 'null');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.Changecolorbutton(null);
  }

  private Changecolorbutton(color: string) {
    this.el.nativeElement.style.color = color;
  }
}