import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('user') user:User;

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  edit(user: User){
    console.log('user', user)
  }

  remove(user: User) {
    const response = confirm('Are you sure to dalete it?');

    if (response) {
      this.dataService.removeUser(user);
    }
  }


}
