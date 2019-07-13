import { Component, OnInit } from '@angular/core';
import { MajorService } from '../../../shared/major.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent implements OnInit {

  constructor(private service: MajorService, private pnotify: PnotifyService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList1();
   }
   resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
  onSubmit(form: NgForm) {
    this.inserRecord(form);
  }
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
  inserRecord(form: NgForm) {
    this.service.postMajor(form.value).subscribe(res => {
      this.pnotify.showSuccessIn();
      this.service.refreshList();
    });
  }

}
