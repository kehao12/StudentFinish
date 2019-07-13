import { Injectable } from '@angular/core';
import { Branch } from './branch.model';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  formData1: Branch;
  list1: Branch[];
  readonly rootURL = 'http://localhost:63091/api';
  constructor(private http: HttpClient) { }
  refreshList() {
    this.http.get(this.rootURL + '/BRANCH').toPromise().then(res => this.list1 = res as Branch[]);
  }
}
