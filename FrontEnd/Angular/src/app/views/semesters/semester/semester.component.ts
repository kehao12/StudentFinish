import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../../../shared/semester.service';
import { NgForm } from '@angular/forms';
import { PnotifyService } from '../../../shared/pnotify.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {

  constructor(private service: SemesterService,private pnotify: PnotifyService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.inserRecord(form);
  }

  inserRecord(form: NgForm) {
  this.service.postSem(form.value).subscribe(res => {
    this.pnotify.showSuccessInsert('Inserted ' + form.value.SEM_NAME + ' Success');
    this.service.resetForm();  this.service.refreshList(); });
  }
s

}
