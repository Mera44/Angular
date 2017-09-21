import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
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
  constructor(DbService: DbService , private activatedRoute: ActivatedRoute, private router: Router) {
    this.data = DbService.getData();
     activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']);
   this.final = this.data[this.id - 1];
     }
  done = false;

    onNavigate() {
        this.router.navigate(['/']);
    }

    canDeactivate(): Observable<boolean> | boolean {
            if (!this.done) {
                return confirm('Do you want to leave?');
            }
            return true;
        }

}
