import { Component, OnInit } from '@angular/core';
import { ConditionService } from '../../../shared/condition.service';
import { LessonService } from '../../../shared/lesson.service';
import { ProgramService } from '../../../shared/program.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';
import { Condition } from '../../../shared/condition.model';


@Component({
  selector: 'app-lesscon-change',
  templateUrl: './lesscon-change.component.html',
  styleUrls: ['./lesscon-change.component.scss']
})
export class LessconChangeComponent implements OnInit {

  constructor(private service: ConditionService,
    private Lesson: LessonService,
    private Program: ProgramService,
    private pnotify: PnotifyService) { }

    PRO_ID: number;

    ngOnInit() {
      this.service.refreshList();
      this.Program.refreshList();
      this.Lesson.refreshList();
    }

    resetForm() {
      this.service.formData = {
        ID: null,
        LESS_NOW: null,
        LESS_PRE: null,
        STATUS: null
      };
    }
    onSubmit(form: NgForm) {
      this.updateRecord(form);

    }

    updateRecord(form: NgForm) {
      console.log(this.service.formData);
      this.service.putCon(form.value).subscribe(res => {
        this.pnotify.showSuccessInsert('Update ' + this.service.formData.LESS_NOW + ' Success');
        this.service.refreshList();
        this.resetForm();
      });
    }
    loadForm(con: Condition) {
      if ( con != null) {
        this.service.formData = Object.assign({}, con);
        this.service.formDataI = con;
      } else {
        this.resetForm();
      }
    }



}
