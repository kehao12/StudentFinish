import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { StudentService } from '../../../shared/student.service';
import { ContactService } from '../../../shared/contact.service';
import { DocumentService } from '../../../shared/document.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private service: StudentService, private Contact: ContactService,private Document: DocumentService) {
   }

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
    this.service.refresh();
    this.service.refreshList();
  }
}
