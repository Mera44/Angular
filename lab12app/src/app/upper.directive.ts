import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private e: ElementRef, private r: Renderer) {
  
    }
    ngOnInit(){
      let t = this.e.nativeElement.innerHTML;
      
    this.r.setElementProperty(this.e.nativeElement, 'innerHtml', t.toUpperCase());
    }
}
