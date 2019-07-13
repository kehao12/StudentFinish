import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { YearService } from '../../../shared/year.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { Year } from '../../../shared/year.model';

@Component({
  selector: 'app-year-change',
  templateUrl: './year-change.component.html',
  styleUrls: ['./year-change.component.scss']
})
export class YearChangeComponent implements OnInit {

  constructor(private service: YearService, private pnotify: PnotifyService) { }

  ngOnInit() {
    this.service.resetForm();
  }
  onSubmit(form: NgForm) {

    this.updateRecord(form);


  }



  updateRecord(form: NgForm) {
  this.service.putYear(form.value).subscribe(res => {
    this.pnotify.showSuccessInsert('Updated ' + form.value.YEAR1 + ' Success' );
    this.service.resetForm(); this.service.refreshList(); });
  }


}
