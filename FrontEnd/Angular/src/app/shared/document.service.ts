import { Injectable, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Document } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  [x: string]: any;
  formData: Document[];
  formData1: Document;
  formDataI: Document;
  frm: Document[];
  list: Document[];
  ID: string;
  @ViewChild('modal') modal: ModalDirective;

  constructor( private api: ApiService , private http: HttpClient) {  }

  
  loadForm(id: string,idc: number) {
    this.formData1 = {
      ID : 0,
      STU_ID: id,
      CATE_ID : idc,
      CHECKBOX : false,
      NOTE : '',
      TEXT : ''
  };
  }


getDoc(id: string)  {
  this.ID=id;
  this.http.get(this.api.Url.document + '/'+id)
  .toPromise().then(res => this.frm = res as  Document[] );
}
  postDoc(formData: Document ) {
    return this.http.post(this.api.Url.document, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.document + '/')
    .toPromise().then(res => this.list = res as  Document[] );
  }
  putDoc(formData: Document ) {
    return this.http.put(this.api.Url.document + '/' + this.ID, formData);
  }
}
