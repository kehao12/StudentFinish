import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Condition } from './condition.model';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {
  [x: string]: any;
  formData: Condition;
  formData1: Condition;
  formDataI: Condition;
  list: Condition[];
  constructor( private api: ApiService , private http: HttpClient) {  }
  // resetForm() {
  //   this.formData1 = {
  //     ID: null,
  //     LESS_NOW: null,
  //     LESS_NEXT: null,
  //     STATUS: null
  // };
  // }
  // loadForm(id: number, id1: number) {
  //   this.formData1 = {
  //     ID: 0,
  //     LESS_NOW: id,
  //     LESS_NEXT: id1,
  //     STATUS: 0
  // };
  // }

  postCon(formData: Condition ) {
    return this.http.post(this.api.Url.condition, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.condition)
    .toPromise().then(res => this.list = res as  Condition[] );
  }

  putCon(formData: Condition ) {
    return this.http.put(this.api.Url.condition + '/' + formData.ID, formData);
  }

  deleteCon(id: number) {
    return this.http.delete(this.api.Url.condition + '/' + id);
  }
}
