import { Directive ,ElementRef, Renderer,Input} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input() appMyvisibility:  boolean;
  constructor(private e: ElementRef, private r: Renderer) { 
   
  }
  ngOnInit(){
   if(this.appMyvisibility == false) { 
     console.log(this.appMyvisibility);
    this.r.setElementStyle(this.e.nativeElement, 'display', 'none');
    }
    else {
      this.r.setElementStyle(this.e.nativeElement, 'display', 'list-item');
    }
    
    }

}

