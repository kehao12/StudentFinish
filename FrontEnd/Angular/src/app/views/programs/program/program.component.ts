import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../../shared/program.service';
import { BranchService } from '../../../shared/branch.service';
import { NgForm } from '@angular/forms';
import { PnotifyService } from '../../../shared/pnotify.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor(private service: ProgramService, private pnotify: PnotifyService) { }

  ngOnInit() {
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
      this.pnotify.showSuccessInsert('Insert ' + this.service.formData.PRO_NAME + ' Success');
    } else {
      this.updateRecord(form);
      this.pnotify.showSuccessInsert('Updated Successfully' );
    }
  }
  //
  checkCode(code: string): boolean {
  // console.log(code);
    if (this.service.list === null) { return true; }
    if (code === '' || code === null) { return true; }
    for (const pro of this.service.list) {
      // console.log(pro.PRO_CODE);
      if (pro.PRO_CODE.toLowerCase() === code.toLowerCase()) {
        return false;
      }
    }
    return true;
  }
  checkProName(code: string): boolean {
    if (this.service.list === null) { return true; }
    if (code === '' || code === null) { return true; }
    for (const pro of this.service.list) {
      if (pro.PRO_NAME.toLowerCase() === code.toLowerCase()) {
        return false;
      }
    }
    return true;

  }
  insertRecord(form: NgForm) {
    console.log(this.service.formData);
    this.service.postProgram(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }
  updateRecord(form: NgForm) {
    console.log(this.service.formData);
    this.service.putProgram(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}

