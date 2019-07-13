import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../../shared/program.service';
import { NgForm } from '@angular/forms';
import {Program} from '../../../shared/program.model';
import { PnotifyService } from '../../../shared/pnotify.service';


@Component({
  selector: 'app-program-changed',
  templateUrl: './program-changed.component.html',
  styleUrls: ['./program-changed.component.scss']
})
export class ProgramChangedComponent implements OnInit {

  constructor(private service: ProgramService, private pnotify: PnotifyService) { }

  ngOnInit() {
    // this.service.resetForm();
    // console.log(this.service.formData);
    this.resetForm();
    this.service.refreshList1();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      PRO_ID: null,
      BRANCH_ID: 1,
      PRO_CODE: '',
      PRO_NAME: '',
      CREDITS_RE: null,
      CREDITS_ELEC: null,
      STATUS: 1,
    };
  }
  onSubmit(form: NgForm) {
    if (form.value.PRO_ID == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  checkCode(id: number, code: string): boolean {
    // console.log(code);
      if (this.service.list === null) { return true; }
      if (code === '' || code === null) { return true; }
      for (const pro of this.service.list) {
        // console.log(pro.PRO_CODE);
        if (pro.PRO_ID !== id && pro.PRO_CODE.toLowerCase() === code.toLowerCase()) {
          return false;
        }
      }
      return true;
    }
    checkProName(id: number, code: string): boolean {
      if (this.service.list === null) { return true; }
      if (code === '' || code === null) { return true; }
      for (const pro of this.service.list) {
        if (pro.PRO_ID !== id && pro.PRO_NAME.toLowerCase() === code.toLowerCase()) {
          return false;
        }
      }
      return true;
    }
  insertRecord(form: NgForm) {
    this.service.postProgram(form.value).subscribe(res => {
      this.pnotify.showSuccessInsert('Insert ' + this.service.formData.PRO_NAME + ' Success');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  updateRecord(form: NgForm) {
    console.log(this.service.formData);
    this.service.putProgram(form.value).subscribe(res => {
      this.pnotify.showSuccessInsert('Update ' + this.service.formData.PRO_NAME + ' Success');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  loadForm(pro: Program) {
    if ( pro != null) {
      this.service.formData = Object.assign({}, pro);
      this.service.formDataI = pro;
    } else {
      this.resetForm();
    }
  }
}
