import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private service:UserService) { }

  ngOnInit() : 
  void {

    this.dtOptions = {
      pageLength:5,
      language: {
        lengthMenu: 'Display <select>'+
          '<option value="5" selected>5</option>'+
          '<option value="10">10</option>'+
          '<option value="50">50</option>'+
          '<option value="100">100</option>'+
          '<option value="-1">All</option>'+
          '</select> records'
      }
 
    };
    this.service.refreshList();
  }

}
