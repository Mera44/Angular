import { Component } from '@angular/core';
import { DataService } from '../data.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
  myForm: FormGroup;
  db;
  userinfo;
  posts;
  constructor(private formBuilder: FormBuilder, DataService: DataService) {
    this.db = DataService;
    this.myForm = formBuilder.group({
      //'userData': formBuilder.group({
        'username': ['', [Validators.required]],
        'email': ['', [ Validators.required]],
     // }),
      'post': ['', Validators.maxLength(10)],
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onSubmit() {
    console.log(this.myForm);
  }
  ongetData() {
    this.db.getData().subscribe(
      res => {
        this.myForm.setValue({'username': res.json().username, 'email': res.json().email, 'post': res.json().name});
      } 
    );

  }

}
