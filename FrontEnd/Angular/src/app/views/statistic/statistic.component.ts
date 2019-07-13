import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../../shared/intake.service';
import { CatalogService } from '../../shared/catalog.service';
import { ProgramService } from '../../shared/program.service';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../shared/student.model';
import { StatisticService } from '../../shared/statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  CATA_ID: number;
  INTAKE_ID: number;
  PRO_ID: number;
  count: number;
  dtOptions: DataTables.Settings = {};
  constructor(private Intake: IntakeService,
    private Catalog: CatalogService,
     private Program: ProgramService,
     // tslint:disable-next-line:no-shadowed-variable
     private Student: StudentService,
     private service : StatisticService
     ) { }

     ngOnInit() : 
     void {

       this.dtOptions = {
        pageLength:5,
        searching : false,
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

       this.count = 0;
       this.CATA_ID = null;
       this.PRO_ID = null;
       this.INTAKE_ID = null;
       this.Intake.refreshList();
       this.Catalog.refreshList();
       this.Program.refreshList();
       this.Student.refreshList();
       this.service.get();
  }
  init() {
    this.count = 0;
  }
  cong() {
    this.count ++;
  }


}
