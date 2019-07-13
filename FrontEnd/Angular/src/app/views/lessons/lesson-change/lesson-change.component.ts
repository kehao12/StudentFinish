import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PnotifyService } from '../../../shared/pnotify.service';
import { ConditionService } from '../../../shared/condition.service';
import { ProgramService } from '../../../shared/program.service';
import { CatalogService } from '../../../shared/catalog.service';
import { LessonService } from '../../../shared/lesson.service';
import { Lesson } from '../../../shared/lesson.model';

@Component({
  selector: 'app-lesson-change',
  templateUrl: './lesson-change.component.html',
  styleUrls: ['./lesson-change.component.scss']
})
export class LessonChangeComponent implements OnInit {

  constructor(private service: LessonService,
    private Catalog: CatalogService,
    private Program: ProgramService,
    private Condition: ConditionService,
    private pnotify: PnotifyService) { }
    id: string;
    LESS_ID: number;
    PRO_ID: number;
    ngOnInit() {
      this.resetForm();
      this.service.refreshList();
      this.Catalog.refreshList();
      this.Program.refreshList();
    }
    resetForm(form?: NgForm) {
      if (form != null) {
        form.resetForm();
      }
      this.service.formData = {
        LESS_ID: 0,
        LESS_CODE: '',
        LESS_NAME: '',
        PRO_ID: null,
        CATA_ID: null,
        CREDIT: null,
        PRICE: null,
        STATUS: 1,
        NOTE: ''
      };
    }

    // Lưu giá trị LESS_ID
    loadCode(id: string, PRO_ID: number) {
      this.id = id;
      this.PRO_ID = PRO_ID;
    }

    // Nút thêm môn học
    onSubmit(form: NgForm) {
      // if (form.value.STU_ID == null) {
      //   this.inserRecord(form);
      // } else {
      //   this.updateRecord(form);
      // }
      this.loadCode(form.value.LESS_CODE, form.value.PRO_ID);
      console.log(form.value.LESS_CODE);
      console.log(form.value);
      this.updateRecord(form);
      this.service.refreshList();


      }

      updateRecord(form: NgForm) {
        console.log(this.service.formData);
        this.service.putLess(form.value).subscribe(res => {
          this.pnotify.showSuccessInsert('Update ' + this.service.formData.LESS_NAME + ' Success');
          this.resetForm(form);
          this.service.refreshList();
        });
      }
      loadForm(less: Lesson) {
        if ( less != null) {
          this.service.formData = Object.assign({}, less);
          this.service.formDataI = less;
        } else {
          this.resetForm();
        }
      }
          // Check valid Code và Name

          checkCode(id: number, code: string): boolean {
            if ( this.service.list === null) { return true; }
            if ( code === '' || code === null) { return true; }
            for (const less of this.service.list) {
            if (less.LESS_ID !==id && less.LESS_CODE.toLowerCase() === code.toLowerCase() ) {
            return false;
            }
            }
          return true;
          }

          checkName(id: number, code: string): boolean {
            if ( this.service.list === null) { return true; }
            if ( code === '' || code === null) { return true; }
            for (const less of this.service.list) {
            if (less.LESS_ID !==id && less.LESS_NAME.toLowerCase() === code.toLowerCase() ) {
            return false;
            }
            }
          return true;
          }
}
