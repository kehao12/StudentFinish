import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../shared/program.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor(private service: ProgramService) { }

  ngOnInit() {
    this.resetForm();
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
}
