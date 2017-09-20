import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective implements OnInit{

  constructor(private e: ElementRef, private r: Renderer) {
  
    }
    ngOnInit() { 
    this.r.setElementStyle(this.e.nativeElement, 'text-transform', 'uppercase');
    }
}
