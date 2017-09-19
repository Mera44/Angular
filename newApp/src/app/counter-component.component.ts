import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template : ` <h1>Component 3:</h1>

  <p><button (click)="emitMessage()"> - </button>  {{counter}}  <button (click)="emitMes()"> + </button></p>`,
 // styleUrls: ['./app.component.css']
})
export class CounterComponent {
 @Input() counter: number;
 @Output() counterchange: EventEmitter<number>;
 constructor() {
   this.counterchange = new EventEmitter();
 }

emitMessage() {
 this.counter --;
 this.counterchange.emit(this.counter );
}

emitMes() {
  this.counter ++;
  this.counterchange.emit(this.counter );
}
// count(data) {
//   this.countervalue = data;
// }


}
