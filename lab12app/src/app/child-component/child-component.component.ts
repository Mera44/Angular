import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  inputs: ['names','title'],
  template: `
  <ul >
  <li *ngFor="let item of names" appUpper [appMyvisibility]='val'> {{item}} </li>
  </ul>
 <button [appMycolors]="colors" [lists]="list" appMycolor (emitColor)="showColor(a)"   >Change Color </button>
 {{myColor}}

  `,
  styles: [],
 
})
export class ChildComponentComponent implements OnInit {
 names: string;
 public val = true;
 public colors: String[]=["red","blue","green"];
 public myColor: string;
 public list:any[]=[2,3,4];
 constructor() {
  
  }
showColor(color:string){
this.myColor=color;
}
 ngOnInit() {
   // console.log("11list"+this.lists.nativeElement.textContent);
 }
}