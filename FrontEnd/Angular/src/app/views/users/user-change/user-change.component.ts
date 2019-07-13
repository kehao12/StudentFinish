import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss']
})
export class UserChangeComponent implements OnInit {

  constructor(private service: UserService, private pnotify: PnotifyService) { }
  parseDate(): Date {

    if (this.service.formData.BIRTH_DAY != null) {
      console.log(new Date(this.service.formData.BIRTH_DAY));
        return new Date(this.service.formData.BIRTH_DAY);
    }
    return null;
}
  ngOnInit() {
    this.service.resetForm();
  }
  onSubmit(form: NgForm) {

    this.updateRecord(form);


  }



  updateRecord(form: NgForm) {
  this.service.putUser(form.value).subscribe(res => {
    this.pnotify.showSuccessInsert('Updated ' + form.value.USERNAME + ' Success' );
    this.service.resetForm(); this.service.refreshList(); });
  }

}
