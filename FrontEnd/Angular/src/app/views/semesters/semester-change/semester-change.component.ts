import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SemesterService } from '../../../shared/semester.service';
import { Semester } from '../../../shared/semester.model';
import { PnotifyService } from '../../../shared/pnotify.service';

@Component({
  selector: 'app-semester-change',
  templateUrl: './semester-change.component.html',
  styleUrls: ['./semester-change.component.scss']
})
export class SemesterChangeComponent implements OnInit {

  constructor(private service: SemesterService,private pnotify: PnotifyService) { }

  ngOnInit() {
    this.service.resetForm();
  }


  onSubmit(form: NgForm) {

    this.updateRecord(form);

  }

  updateRecord(form: NgForm) {
  this.service.putSem(form.value).subscribe(res => {
    this.pnotify.showSuccessInsert('Updated ' + form.value.SEM_NAME + ' Success');
  this.service.resetForm();  this.service.refreshList(); });
  }

}
