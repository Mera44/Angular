import { Directive,Input, Output, ElementRef, Renderer, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
 @Output() emitColor:EventEmitter<string>;
//  onchangeColor:EventEmitter<string>;
@Input() appMycolors :string[];
@Input() lists;
i:number=0;
  constructor(private e: ElementRef, private r: Renderer) { 
 //   this.onchangeColor=new EventEmitter();
 this.emitColor=new EventEmitter();
 
  }
 ngOnInit(){
   console.log(this.lists);
    }
    @HostListener('click') changeColor(){
      console.log("lists"+this.lists);
      console.log("colors"+this.appMycolors);
      if(this.i==this.appMycolors.length)
this.i=0;


      this.r.setElementStyle(this.e.nativeElement,"color",this.appMycolors[this.i]);
      this.emitColor.emit(this.appMycolors[this.i]);
      this.i=this.i+1;

    }

}

