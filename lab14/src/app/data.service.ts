import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {
 data;
  constructor(public http: Http) { }
 
  getData() {
      return this.http.get('https://jsonplaceholder.typicode.com/users/1');
      
  }
}
