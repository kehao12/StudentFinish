import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../../../shared/intake.service';
import { Intake } from '../../../shared/intake.model';
import { CatalogService } from '../../../shared/catalog.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { Student } from '../../../shared/student.model';
import { StudentService } from '../../../shared/student.service';

@Component({
  selector: 'app-intakes-list',
  templateUrl: './intakes-list.component.html',
  styleUrls: ['./intakes-list.component.scss']
})
export class IntakesListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private service: IntakeService, private Catalog: CatalogService,
    private pnotify: PnotifyService,private Student: StudentService) { }
  private id: number;
  private name: string;
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
    this.Catalog.refreshList();
    this.Student.refreshList();
  }

  populateForm(intk: Intake) {
    this.service.formData = Object.assign({}, intk);
    this.service.formDataI = Object.assign({}, intk);
  }
  loadID(idd: number, name: string) {
    this.id = idd;
    this.name = name;
  }
  conditionDel(id:number):boolean
  {
    if (this.Student.list==null ) return true;
    for ( const stu of this.Student.list) {
      if (stu.INTAKE_ID==id ) {
      return false;
      }
      return true;
    }
  }
  onDelete(idd: number) {
    this.service.deleteIntake(idd).subscribe(res => {
     this.service.refreshList();
    this.pnotify.showSuccessDel('Deleted Success'); });
  }
}
