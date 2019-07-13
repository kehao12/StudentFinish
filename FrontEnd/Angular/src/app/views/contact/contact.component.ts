import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { ContactService } from '../../shared/contact.service';
import { NgForm } from '@angular/forms';
import { PnotifyService } from '../../shared/pnotify.service';
import { Contact } from '../../shared/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent  {
  @ViewChild('myModal') public myModal: ModalDirective;

   // tslint:disable-next-line:no-shadowed-variable
   constructor(private Contact: ContactService, private pnotify: PnotifyService) { }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit() {
     this.Contact.resetForm();
  }
  updateRecord(form: Contact) {
    console.log(form);
    this.Contact.putCon(form).subscribe(res => {
      this.Contact.refreshList();
    this.pnotify.showSuccessInsert('Updated Contact Success');
  });
  }
}
