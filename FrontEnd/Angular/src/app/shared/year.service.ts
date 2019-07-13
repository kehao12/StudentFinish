import { Injectable, ViewChild } from '@angular/core';
import { Year } from './year.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YearService {
  formData: Year;
  formDataI: Year;
  [x: string]: any;
  list: Year[];
  @ViewChild('modal') modal: ModalDirective;
  constructor( private api: ApiService , private http: HttpClient) {  }
  showModal(event = null, obj: Year ) {
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
    YEAR_ID: null,
    YEAR1: null,
    STATUS: 1,
  };
  }
  checkYear(id:number,year: number): boolean {
    if ( this.list === null) { return true; }
    if ( year === null) { return true; }
    for (const yr of this.list) {
    if (yr.YEAR1 == year && yr.YEAR_ID!=id) {
    return false;
    }
    }
  return true;

}
  postYear(formData: Year ) {
    return this.http.post(this.api.Url.year, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.year + '/')
    .toPromise().then(res => this.list = res as  Year[] );
  }
  putYear(formData: Year ) {
    return this.http.put(this.api.Url.year + '/' + formData.YEAR_ID, formData);
  }

  getAllYear() : Observable<Year[]> {
    return this.http.get<Year[]>(this.api.Url.years);
  }
}
