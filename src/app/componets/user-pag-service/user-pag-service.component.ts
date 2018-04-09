import { Component, OnInit, Input, Output, 
EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-pag-service',
  templateUrl: './user-pag-service.component.html',
  styleUrls: ['./user-pag-service.component.scss']
})
export class UserPagServiceComponent implements OnInit {

  @Input() numberPages;
  @Input() all;

  @Output() goPage = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  getItem(e){
    //console.log("pues que venga", e)
    let arr = [];
    for (let n = 0; n < e; n++){
      arr.push(n)
    }
    return arr;
  }

  
  pagination(event, index){
    event.preventDefault();
    this.goPage.emit(index);
  }

}
