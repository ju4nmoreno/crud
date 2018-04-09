import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.scss']
})
export class UserServiceComponent implements OnInit {

  constructor() { }
  
  @Input() item;

  ngOnInit() {
  }

}
