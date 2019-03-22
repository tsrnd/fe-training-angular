import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() hightLight:string;
  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.el);
    
    this.highlight(this.hightLight);
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}