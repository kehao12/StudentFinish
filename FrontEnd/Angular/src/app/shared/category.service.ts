import { Injectable, ViewChild } from '@angular/core';
import { Category } from './category.model';
import { HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';
import { ModalDirective } from 'ngx-bootstrap';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor( private api: ApiService, private http: HttpClient) {  }
  formData: Category;
  formDataI: Category;
  list: Category[];
  @ViewChild('modal') modal: ModalDirective;
  resetForm() {
    this.formData = {
      CATE_ID : null,
      NAME_EN : '',
      NAME_VI : '',
      STATUS : 1,
      SQUENCE_NUM : null,
      NOTE : null,
      INTYPE_ID : 1

    };
  }
  showModal(event = null, cate: Category) {
    if (event != null) {
      event.preventDefault();
    }
    if (cate != null) {
      this.formData = Object.assign({}, cate);
      this.formDataI = cate;
    } else {
      this.resetForm();
    }
  }
  checkName_EN(id: number, name_en: string): boolean {
      if ( this.list === null) { return true; }
      if ( name_en === '' || name_en === null) { return true; }
      for ( const cate of this.list) {
      if (cate.CATE_ID !== id && cate.NAME_EN === name_en) {
      return false;
      }
      }
    return true;

  }
  postCategory(formData: Category ) {
    return this.http.post(this.api.Url.category, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.category)
    .toPromise().then(res => this.list = res as Category[] );
  }
  putCategory(formData: Category ) {
    return this.http.put(this.api.Url.category + '/' + formData.CATE_ID, formData);
  }
}
