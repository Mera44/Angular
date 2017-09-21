import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
@Component({
  selector: 'app-student',
  template: `
    <ul>
      <li *ngFor="let item of data"><a href= "/profile/{{item.id}}">{{item.name}}</a></li>
    </ul>

  `,
  styles: []
})
export class StudentsComponent  {
  data = {};
  constructor(DbService: DbService) {
    this.data = DbService.getData();
  }

}
