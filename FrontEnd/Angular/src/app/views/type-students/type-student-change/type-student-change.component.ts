import { Component, OnInit } from '@angular/core';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';
import { TypestudentService } from '../../../shared/typestudent.service';
import { Typestudent } from '../../../shared/typestudent.model';

@Component({
  selector: 'app-type-student-change',
  templateUrl: './type-student-change.component.html',
  styleUrls: ['./type-student-change.component.scss']
})
export class TypeStudentChangeComponent implements OnInit {

  constructor(private service: TypestudentService, private pnotify: PnotifyService) { }

  ngOnInit() {
    this.service.resetForm();
    this.service.refreshList();
  }
  onSubmit(form: NgForm) {
      this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.putTypeStudent(form.value).subscribe(res => {
      this.pnotify.showSuccessInsert('Updated ' + form.value.TYPE_NAME + ' Success');
      this.service.resetForm(); this.service.refreshList();
    });
  }

}
