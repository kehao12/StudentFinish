import { Injectable } from '@angular/core';
import { Program } from './program.model';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Branch } from './branch.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  [x: string]: any;
  formData: Program;
  formData1: Branch;
  list: Program[];
  list1: Branch[];
  constructor(private api: ApiService,
    private http: HttpClient) { }
  refreshList() {
    this.http.get(this.api.Url.program).toPromise().then(
      res => this.list = res as Program[]);
  }
  refreshList1() {
    this.http.get(this.api.Url.branch + '/').toPromise().then(res => this.list1 = res as Branch[]);
  }
  checkName_EN(id: number, proName: string): boolean {
    if (this.list === null) { return true; }
    if (proName === '' || proName === null) { return true; }
    for (const pro of this.list) {
      if (pro.PRO_ID !== id && pro.PRO_NAME === proName) {
        return false;
      }
    }
    return true;

  }

  postProgram(formData: Program) {
    return this.http.post(this.api.Url.program + '/' + formData.PRO_ID, formData);
  }
  putProgram(formData: Program) {
    return this.http.put(this.api.Url.program + '/' + formData.PRO_ID, formData);
  }
}
