import { Injectable, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Typestudent } from './typestudent.model';
import { ModalDirective } from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class TypestudentService {

  [x: string]: any;
  formData: Typestudent;
  formDataI: Typestudent;
  list: Typestudent[];
  @ViewChild('modal') modal: ModalDirective;
  constructor(private api: ApiService, private http: HttpClient) { }
  resetForm() {
    this.formData = {
      STUTYPE_ID: null,
      TYPE_NAME: null,
      STATUS: 1,
    };
  }
  showModal(event = null, obj: Typestudent ) {
    if (event != null) {
      event.preventDefault();
    }
    if (obj != null) {
      this.formData = Object.assign({}, obj);
      this.formDataI = obj;
    } else {
      this.resetForm();
    }
  }
  checkCode(id: number, code: string): boolean {
    if (this.list === null) { return true; }
    if (code === '' || code === null) { return true; }
    for (const pro of this.list) {
      if (pro.STUTYPE_ID !== id && pro.TYPE_NAME.toLowerCase() === code.toLowerCase()) {
        return false;
      }
    }
    return true;
  }
  refreshList() {
    this.http.get(this.api.Url.typestudent)
    .toPromise().then(res => this.list = res as Typestudent[]);
  }

  postTypeStudent(formData: Typestudent ) {
    return this.http.post(this.api.Url.typestudent, formData);
  }
  putTypeStudent(formData: Typestudent ) {
    return this.http.put(this.api.Url.typestudent + '/' + formData.STUTYPE_ID, formData);
  }
}
