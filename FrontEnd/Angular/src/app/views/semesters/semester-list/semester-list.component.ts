import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../../../shared/semester.service';
import { Semester } from '../../../shared/semester.model';

@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.scss']
})
export class SemesterListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private service: SemesterService) { }

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
  populateForm(sem: Semester) {
    this.service.formData = Object.assign({}, sem);
    this.service.formDataI = Object.assign({}, sem);
  }


}
