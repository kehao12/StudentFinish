import { Component, OnInit } from '@angular/core';
import { MajorService } from '../../../shared/major.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-major-changed',
  templateUrl: './major-changed.component.html',
  styleUrls: ['./major-changed.component.scss']
})
export class MajorChangedComponent implements OnInit {

  constructor(private service: MajorService, private pnotify: PnotifyService) { }

  ngOnInit() {
    this.service.resetForm();
    console.log(this.service.formData);
  }
  onSubmit(form: NgForm) {
    this.updateRecord(form);
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
  updateRecord(form: NgForm) {
    this.service.putMajor(form.value).subscribe(res => {
      this.pnotify.showSuccessUp(this.service.formData.PRO_CODE);
      this.service.refreshList();
  });
  }
}
