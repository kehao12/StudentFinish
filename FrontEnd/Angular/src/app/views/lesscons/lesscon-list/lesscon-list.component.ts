import { Component, OnInit } from '@angular/core';
import { ConditionService } from '../../../shared/condition.service';
import { ProgramService } from '../../../shared/program.service';
import { LessonService } from '../../../shared/lesson.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';
import { Condition } from '../../../shared/condition.model';

@Component({
  selector: 'app-lesscon-list',
  templateUrl: './lesscon-list.component.html',
  styleUrls: ['./lesscon-list.component.scss']
})
export class LessconListComponent implements OnInit {
id: number;
  constructor(private service: ConditionService,
    private Lesson: LessonService,
    private Program: ProgramService,
    private pnotify: PnotifyService) { }

    ngOnInit() {
      this.service.refreshList();
      this.Program.refreshList();
      this.Lesson.refreshList();
    }


    loadID(idd: number) {
      this.id = idd;
    }
    onDelete(idd: number) {
      this.service.deleteCon(idd).subscribe(res => {
       this.service.refreshList();
      this.pnotify.showSuccessDel('Deleted Success'); });
    }

    populateForm(con: Condition) {
      this.service.formData = Object.assign({}, con);
      this.service.formDataI = Object.assign({}, con);
    }
}
