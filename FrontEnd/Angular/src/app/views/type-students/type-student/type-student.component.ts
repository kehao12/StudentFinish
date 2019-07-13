import { Component, OnInit } from '@angular/core';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';
import { TypestudentService } from '../../../shared/typestudent.service';

@Component({
  selector: 'app-type-student',
  templateUrl: './type-student.component.html',
  styleUrls: ['./type-student.component.scss']
})
export class TypeStudentComponent implements OnInit {

  constructor(private service: TypestudentService, private pnotify: PnotifyService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
      this.inserRecord(form);
  }
  inserRecord(form: NgForm) {
    this.service.postTypeStudent(form.value).subscribe(res => {
      this.pnotify.showSuccessInsert('Inserted ' + form.value.TYPE_NAME + ' Success');
      this.service.resetForm(); this.service.refreshList();
    });
  }
}
