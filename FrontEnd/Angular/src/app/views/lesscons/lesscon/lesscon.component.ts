import { Component, OnInit } from '@angular/core';
import { ConditionService } from '../../../shared/condition.service';
import { ProgramService } from '../../../shared/program.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';
import { LessonService } from '../../../shared/lesson.service';

@Component({
  selector: 'app-lesscon',
  templateUrl: './lesscon.component.html',
  styleUrls: ['./lesscon.component.scss']
})
export class LessconComponent implements OnInit {

  constructor(private service: ConditionService,
    private Lesson: LessonService,
    private Program: ProgramService,
    private pnotify: PnotifyService) { }

    PRO_ID: number;

    ngOnInit() {
      this.resetForm();
      this.service.refreshList();
      this.Program.refreshList();
      this.Lesson.refreshList();
    }
    resetForm(form?: NgForm) {

      if (form != null) {
        form.resetForm();

      }
      this.PRO_ID = null;
      this.service.formData = {
        ID: null,
        LESS_NOW: null,
        LESS_PRE: null,
        STATUS: 1
      };
    }
      onSubmit(form: NgForm) {
          this.inserRecord(form);
        }

      inserRecord(form: NgForm) {
        this.service.postCon(form.value).subscribe(res => {
          this.resetForm(form);  this.service.refreshList();
          this.pnotify.showSuccessInsert('Inserted Success');
        });
        }


}
