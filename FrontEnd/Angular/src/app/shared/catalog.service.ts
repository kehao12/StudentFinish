import { Injectable } from '@angular/core';
import { Catalog } from './catalog.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  [x: string]: any;
  formData: Catalog;
  list: Catalog[];
  

  constructor(private http: HttpClient, private api: ApiService) { }
  // postIntake(formData: Catalog) {
  //   return this.http.post(this.rootURL + '/INTAKE', formData);
  // }

  // putIntake(formData: Intake) {
  //   return this.http.put(this.rootURL + '/INTAKE' + formData.INTAKE_ID, formData);
  // }
  refreshList() {
    this.http.get(this.api.Url.catalog)
    .toPromise().then(res => this.list = res as Catalog[]);
  }
  
  getAllCatalog() : Observable<Catalog[]>{
    return this.http.get<Catalog[]>(this.api.Url.catalogs);
  }

  getACatalog(id : number) : Observable<Catalog>{
    return this.http.get<Catalog>(this.api.Url.catalog + '/?id=' + id);
  }

  addCatalog(startYear : number, yearEnd : number, note : string, status : number) : Observable<Catalog>{
    return this.http.post<Catalog>(this.api.Url.catalog, {
        YEAR_START_ID: startYear,    
        YEAR_END_ID: yearEnd, 
        NOTE: note,
        STATUS: status
    });
  }

  editCatalog(id: number ,startYear : number, yearEnd : number, note : string, status : number) : Observable<Catalog>{
    return this.http.put<Catalog>(this.api.Url.catalog,{
      CATA_ID: id,
      YEAR_START_ID: startYear,    
      YEAR_END_ID: yearEnd, 
      NOTE: note,
      STATUS: status
    });
  }

  handlerrors(err) : string{
    if(err.error instanceof Error){
       return 'client error :' + err.error.message;
    }else{
      return 'Server side error :' + err.status  + ' ' + err.error;
    }
  }

}
