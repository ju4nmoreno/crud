import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserS } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-view-list-service',
  templateUrl: './user-view-list-service.component.html',
  styleUrls: ['./user-view-list-service.component.scss']
})
export class UserViewListServiceComponent implements OnInit {

  usersS: UserS[];
  info:any[];
  nPages:any[];
  all:any[];

  constructor(
    public dataService:DataService,
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
    this.get();
  }
  
  get(path:string = ""){
    this.httpClient.get(`https://reqres.in/api/users${path}`)
      .subscribe(
        (response:any[]) => {
          if (response !== null){
            this.info = response["data"];
            this.nPages = response["total_pages"];
            this.all = response;
          }
        }
      )
  }

  changePage(index){
    this.get(`?page=${index}`);
  }

}
