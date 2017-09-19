import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template : ` <h1>Component 3:</h1>

  <p><button (click)="emitMessage()"> - </button>  {{countervalue + counter}}  <button (click)="emitMes()"> + </button></p>`,
 // styleUrls: ['./app.component.css']
})
export class CounterComponent {
 public countervalue: number;
 @Input() counter: number;
 @Output() counterchange: EventEmitter<number>;
 constructor() {
   this.countervalue = 0;
   alert(this.counter);
   this.counterchange = new EventEmitter();
 }

emitMessage() {
 this.countervalue --;
 this.counterchange.emit(this.countervalue + this.counter);
}

emitMes() {
  this.countervalue ++;
  this.counterchange.emit(this.countervalue + this.counter);
}
// count(data) {
//   this.countervalue = data;
// }


}
