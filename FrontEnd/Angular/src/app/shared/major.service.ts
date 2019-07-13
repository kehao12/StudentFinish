import { Injectable, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Major } from './major.model';
import { ModalDirective } from 'ngx-bootstrap';
import { Branch } from './branch.model';
@Injectable({
  providedIn: 'root'
})
export class MajorService {

  constructor(private api: ApiService, private http: HttpClient) { }
  formData: Major;
  formDataI: Major;
  list: Major[];
  list1: Branch[];
  @ViewChild('modal') modal: ModalDirective;
  resetForm() {
    this.formData = {
      PRO_ID: null,
      BRANCH_ID: 1,
      PRO_CODE: '',
      PRO_NAME: '',
      CREDITS_RE: null,
      CREDITS_ELEC: null,
      STATUS: 1,
    };
  }
  showModal(event = null, ma: Major) {
    if (event != null) {
      event.preventDefault();
    }
    if (ma != null) {
      this.formData = Object.assign({}, ma);
      this.formDataI = ma;
    } else {
      this.resetForm();
    }
  }
  postMajor(formData: Major ) {
    return this.http.post(this.api.Url.program, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.program)
    .toPromise().then(res => this.list = res as Major[] );
  }
  refreshList1() {
    this.http.get(this.api.Url.branch + '/').toPromise().then(res => this.list1 = res as Branch[]);
  }
  putMajor(formData: Major ) {
    return this.http.put(this.api.Url.program + '/' + formData.PRO_ID, formData);
  }

}
