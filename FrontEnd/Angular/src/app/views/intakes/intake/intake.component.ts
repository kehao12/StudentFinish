import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IntakeService } from '../../../shared/intake.service';
import { CatalogService } from '../../../shared/catalog.service';
import { PnotifyService } from '../../../shared/pnotify.service';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.scss']
})
export class IntakeComponent implements OnInit {
  toastr: any;

  constructor(private service: IntakeService, private Catalog: CatalogService, private pnotify: PnotifyService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
    this.Catalog.refreshList();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
    INTAKE_ID: null,
    CATA_ID: 1,
    INTAKE_CODE: '',
    INTAKE_NAME: '',
    STATUS: 1,
    };
  }
  onSubmit(form: NgForm) {
  if (form.value.INTAKE_ID == null) {
    this.inserRecord(form);
    this.pnotify.showSuccessInsert('Inserted ' + form.value.INTAKE_NAME + ' Success' );
  } else {
    this.updateRecord(form);
    this.pnotify.showSuccessInsert('Updated ' + form.value.INTAKE_NAME + ' Success' );
  }
  }

  checkCode(code: string): boolean {
    if ( this.service.list === null) { return true; }
      if ( code === '' || code === null) { return true; }
    for (const intk of this.service.list) {
    if (intk.INTAKE_CODE === code) {
    return false;
    }
    }
  return true;

}

checkName(code: string): boolean {
  if ( this.service.list === null) { return true; }
    if ( code === '' || code === null) { return true; }
  for (const intk of this.service.list) {
  if (intk.INTAKE_NAME === code) {
  return false;
  }
  }
return true;

}

  inserRecord(form: NgForm) {
  this.service.postIntake(form.value).subscribe(res => {
    this.resetForm(form);  this.service.refreshList(); });
  }

  updateRecord(form: NgForm) {
  this.service.putIntake(form.value).subscribe(res => {
  this.resetForm(form);  this.service.refreshList(); });
  }

}

