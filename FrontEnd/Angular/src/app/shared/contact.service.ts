import { Injectable, ViewChild } from '@angular/core';
import { Contact } from './contact.model';
import { ModalDirective } from 'ngx-bootstrap';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;
  formData: Contact;
  formData1: Contact;
  formDataI: Contact;
  list: Contact[];
  Con : Contact;
  @ViewChild('modal') modal: ModalDirective;

  constructor( private api: ApiService , private http: HttpClient) {  }
  
  resetForm() {
    this.formData1 = {
      CONTACT_ID: null,
      STU_ID:   ' ',
      CELL_PHONE:   ' ',
      HOME_PHONE:   ' ',
      PHONE_MESS:   ' ',
      FATHER_NAME:   ' ',
      FATHER_PHONE:   ' ',
      FATHER_MAIL:   ' ',
      FATHER_WORKING:   ' ',
      FATHER_POSISION:   ' ',
      MOTHER_NAME:   ' ',
      MOTHER_PHONE:   ' ',
      MOTHER_WORKING:   ' ',
      MOTHER_POSISION:   ' ',
      MOTHER_MAIL:   ' ',
      SPON_NAME:   ' ',
      SPON_PHONE:   ' ',
      SPON_MAIL:   ' ',
      SPON_WORKING:   ' ',
      SPON_POSISION:   ' ',
  };
  }
  loadForm(id: string) {
    this.formData1 = {
      CONTACT_ID: 0,
      STU_ID: id,
      CELL_PHONE:   '',
      HOME_PHONE:   '',
      PHONE_MESS:   '',
      FATHER_NAME:   '',
      FATHER_PHONE:   '',
      FATHER_MAIL:   '',
      FATHER_WORKING:   '',
      FATHER_POSISION:   '',
      MOTHER_NAME:   '',
      MOTHER_PHONE:   '',
      MOTHER_WORKING:   '',
      MOTHER_POSISION:   '',
      MOTHER_MAIL:   '',
      SPON_NAME:   '',
      SPON_PHONE:   '',
      SPON_MAIL:   '',
      SPON_WORKING:   '',
      SPON_POSISION:   '',
  };
  }


getCon(id: string)  {
  this.http.get(this.api.Url.contact + '/'+id)
  .toPromise().then(res => this.formData1 = res as  Contact );
}
  postCon(formData: Contact ) {
    return this.http.post(this.api.Url.contact, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.contact + '/')
    .toPromise().then(res => this.list = res as  Contact[] );
  }
  putCon(formData: Contact ) {
    return this.http.put(this.api.Url.contact + '/' + formData.CONTACT_ID, formData);
  }
}
