import { Injectable } from '@angular/core';
import { User, UserS } from '../models/user';

@Injectable()
export class DataService {

  users: User[];

  userSer: UserS[];

  constructor() { 
    this.users = [];
    this.userSer = [];
  }

  getUser(): User[]{
    if (localStorage.getItem('users') === null){
      this.users = [];
    } else {
      this.users = JSON.parse(localStorage.getItem('users'))
    }
    return this.users;
  }

  addUser(user: User):void{
    this.users.unshift(user);
    let users;

    if (localStorage.getItem('users') === null){
      users = [];
      users = [
        user
      ];
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem('users'));
      users.unshift(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  removeUser(user: User){
    for (let i = 0; this.users.length; i++){
      if (user == this.users[i]){
        this.users.splice(i, 1);
        localStorage.setItem('users', JSON.stringify(this.users))
      }
    }
  }

}
