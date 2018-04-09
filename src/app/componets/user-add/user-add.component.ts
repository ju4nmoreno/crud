import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  birthday: string;
  age: number;

  form;

  @Output() userAdded = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{9,15}$'),
      ])),
      birthday: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))')
      ])),
      age: new FormControl('', this.ageValidator),
    });
  }

  ageValidator(control){
    
    if (control.value === 0)  return null
    else return null;
  }

  addUser(value){
    this.userAdded.emit({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phone: value.phone,
      birthday: value.birthday,
      age: value.age,
    });
    this.form.reset();
  }

}
