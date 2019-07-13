import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { YearService } from '../../../shared/year.service';
import { ToastrService } from 'ngx-toastr';
import { PnotifyService } from '../../../shared/pnotify.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  constructor(private service: YearService, private pnotify: PnotifyService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.inserRecord(form);

  }

  inserRecord(form: NgForm) {
  this.service.postYear(form.value).subscribe(res => {
    this.pnotify.showSuccessInsert('Inserted ' + form.value.YEAR1 + ' Success' );
    this.service.resetForm();  this.service.refreshList(); });
  }
}
