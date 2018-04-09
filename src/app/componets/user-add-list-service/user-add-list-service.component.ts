import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserS } from '../../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-add-list-service',
  templateUrl: './user-add-list-service.component.html',
  styleUrls: ['./user-add-list-service.component.scss']
})
export class UserAddListServiceComponent implements OnInit {

  @Input() info;
  
  constructor(
    public dataService:DataService,
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
  
  }

  loadUser(){
    
    
  }

  

}
