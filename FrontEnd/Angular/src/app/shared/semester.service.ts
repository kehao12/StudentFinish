import { Injectable, ViewChild } from '@angular/core';
import { Semester } from './semester.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { ModalDirective } from 'ngx-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  [x: string]: any;
  formData: Semester;
  formDataI: Semester;
  list: Semester[];
  @ViewChild('modal') modal: ModalDirective;

  constructor( private api: ApiService , private http: HttpClient) {  }
  showModal(event = null, obj: Semester ) {
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
  resetForm() {
    this.formData = {
    SEM_ID: null,
    SEM_NAME: '',
    PRIORITY: null,
    STATUS: 1,
  };
  }
  checkCode(id: number,code: string): boolean {
    if ( this.list === null) { return true; }
      if ( code === '' || code === null) { return true; }
    for (const sem of this.list) {
    if (sem.SEM_NAME.toLowerCase() === code.toLowerCase() && sem.SEM_ID!=id) {
    return false;
    }
    }
  return true;

}
  postSem(formData: Semester ) {
    return this.http.post(this.api.Url.semester, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.semester + '/')
    .toPromise().then(res => this.list = res as  Semester[] );
  }
  putSem(formData: Semester ) {
    return this.http.put(this.api.Url.semester + '/' + formData.SEM_ID, formData);
  }
}
