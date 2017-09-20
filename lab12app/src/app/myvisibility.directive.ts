import { Directive ,ElementRef, Renderer,Input} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input() appvisibilty:boolean;
  constructor(private e: ElementRef, private r: Renderer) { 
   
  }
  ngOnInit(){
   if(this.appvisibilty==false){
    alert(this.appvisibilty);
    this.r.setElementStyle(this.e.nativeElement, 'display', 'none');
    }
    
    }

}

