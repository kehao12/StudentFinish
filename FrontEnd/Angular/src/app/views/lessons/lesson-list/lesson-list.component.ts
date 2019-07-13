import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../../shared/lesson.service';
import { CatalogService } from '../../../shared/catalog.service';
import { ProgramService } from '../../../shared/program.service';
import { ConditionService } from '../../../shared/condition.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { Lesson } from '../../../shared/lesson.model';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  constructor(private service: LessonService,
    private Catalog: CatalogService,
    private Program: ProgramService,
    private Condition: ConditionService,
    private pnotify: PnotifyService) { }

  ngOnInit() {
    this.service.refreshList();
    this.Catalog.refreshList();
    this.Program.refreshList();
  }
  populateForm(less: Lesson) {
    this.service.formData = Object.assign({}, less);
    this.service.formDataI = Object.assign({}, less);
  }
}
