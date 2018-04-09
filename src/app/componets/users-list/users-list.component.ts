import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];
  hide: boolean = true;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUser();
  }

  addUser(user: User) {
    this.dataService.addUser(user);
  }

  toggle(event){
    event.preventDefault();
    this.hide = !this.hide;
  }

  

}
