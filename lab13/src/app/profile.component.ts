import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  template: `
    <ul>
      <li >Name:{{final.name}}</li>
      <li >ID:{{final.id}}</li>
      <li >Student ID:{{final.stuId}}</li>
      <li >Email: {{final.email}}</li>
    </ul>
    
  `,
  styles: []
})
export class ProfileComponent  {
  data = {};
  final = {};
  id: number;
  constructor(DbService: DbService , private activatedRoute: ActivatedRoute) {
    this.data = DbService.getData();
     activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']);
   this.final = this.data[this.id - 1];
  }

}
