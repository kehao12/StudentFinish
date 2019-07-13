import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService, private pnotify: PnotifyService) { }


  ngOnInit() {
    this.service.resetForm();
  }
  

  onSubmit(form: NgForm) {
      console.log(form.value);
      this.inserRecord(form);
  }
  inserRecord(form: NgForm) {
    this.service.postUser(form.value).subscribe(res => {
      this.pnotify.showSuccessInsert('Inserted ' + form.value.USERNAME + ' Success');
      this.service.resetForm(); this.service.refreshList();
    });
  }



}
