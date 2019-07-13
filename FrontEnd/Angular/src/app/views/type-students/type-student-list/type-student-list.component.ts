import { Component, OnInit } from '@angular/core';
import { TypestudentService } from '../../../shared/typestudent.service';
import { Typestudent } from '../../../shared/typestudent.model';


@Component({
  selector: 'app-type-student-list',
  templateUrl: './type-student-list.component.html',
  styleUrls: ['./type-student-list.component.scss']
})
export class TypeStudentListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private service: TypestudentService) { }

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
