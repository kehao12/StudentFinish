import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../../shared/program.service';
import { Program } from '../../../shared/program.model';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private service: ProgramService) { }
  private id: number;
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
  populateForm(pro: Program) {
    this.service.formData = Object.assign({}, pro);
    this.service.formDataI = Object.assign({}, pro);
  }
  loadID(idd: number) {
    this.id = idd;
  }
}
