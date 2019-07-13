import { Injectable } from '@angular/core';
import { Intake } from './intake.model';
import { HttpClient } from '@angular/common/http';
import { Catalog } from './catalog.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {
  [x: string]: any;
  formData: Intake;
  formData1: Catalog;
  list: Intake[];
  list1: Catalog[];
  constructor(private api: ApiService, private http: HttpClient) { }
  postIntake(formData: Intake) {
    return this.http.post(this.api.Url.intake, formData);
  }

  putIntake(formData: Intake) {
    return this.http.put(this.api.Url.intake + '/' + formData.INTAKE_ID, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.intake)
    .toPromise().then(res => this.list = res as Intake[]);
  }
  refreshList1() {
    this.http.get(this.api.Url.catalog)
    .toPromise().then(res => this.list1 = res as Catalog[]);
  }
  deleteIntake(id: number) {
    return this.http.delete(this.api.Url.intake + '/' + id);
  }

}
