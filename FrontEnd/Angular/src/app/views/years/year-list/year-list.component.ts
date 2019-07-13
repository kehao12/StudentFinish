import { Component, OnInit, AfterViewInit } from '@angular/core';
import { YearService } from '../../../shared/year.service';
import { Year } from '../../../shared/year.model';

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.scss']
})
export class YearListComponent implements OnInit  {
  dtOptions: DataTables.Settings = {};
  constructor(private service: YearService) { }


  ngOnInit()  :void {
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
  populateForm(year: Year) {
    this.service.formData = Object.assign({}, year);
    this.service.formDataI = Object.assign({}, year);
  }

}
