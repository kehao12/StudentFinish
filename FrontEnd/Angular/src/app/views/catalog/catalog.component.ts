import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl,ValidatorFn, AbstractControl, Validator, Validators} from '@angular/forms'
import { Catalog } from '../../shared/catalog.model';
import { CatalogService } from '../../shared/catalog.service';
import { Year } from '../../shared/year.model';
import { YearService } from '../../shared/year.service';
import {PnotifyService} from '../../shared/pnotify.service'
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  listCatalog : Catalog[];
  catalog : Catalog;
  tmp : Catalog;
  listYears : Year[];
  statusSelectedDefault : number = 0;
  statusSelected : number;
  yearStart : number;
  yearEnd : number;
  note : string;
  status : number;
  valStartYear : boolean = false;
  valEndYear : boolean = false;
  valSY : boolean = false;
  valEY : boolean = false;
  submitNull : boolean = true;
  pino;
  dtOptions: DataTables.Settings = {};
  formEditCatalog = new FormGroup({
    'startYear' : new FormControl('', [this.validataionStartYear]),
    'endYear' : new FormControl(''),
    'note' : new FormControl(''),
    'status' : new FormControl(''),
  })
  formAddCatalog = new FormGroup({
    'startYear' : new FormControl(''),
    'endYear' : new FormControl(''),
    'note' : new FormControl(''),
    'status' : new FormControl(''),
    
  })
  constructor(private catalogService : CatalogService,
    
    private yearService : YearService,
    private pinotify : PnotifyService
  
    
    ) { 
      this.pino = pinotify.getPNotify();
    }

    ngOnInit() : 
    void {
      this.dtOptions = {
        pageLength:5,
        language: {
          lengthMenu: 'Display <select>'+
            '<option value="5" selected>5</option>'+
            '<option value="10">10</option>'+
            '<option value="50">50</option>'+
            '<option value="100">100</option>'+
            '<option value="-1">All</option>'+
            '</select> records'
        }

      };
    this.getAllCatalogs();
    this.getAllYear();
  }

  getAllCatalogs(){
    return this.catalogService.getAllCatalog().subscribe(data => 
      {
        this.listCatalog = data;
      })
  }

  getAllYear() {
    return this.yearService.getAllYear().subscribe(data => {
      this.listYears = data;
      
    });
  }

  getACatalog(id : number) {
    return this.catalogService.getACatalog(id).subscribe(data => {
        this.catalog = data[0];
        this.formEditCatalog.setValue({
          'startYear' : this.catalog.YEAR_START_ID,
          'endYear' : this.catalog.YEAR_END_ID,
          'note' : this.catalog.NOTE,
          'status' : this.catalog.STATUS,
        });
        this.statusSelected = this.catalog.STATUS;
    })
  }

  addCatalog() {
  // console.log(this.formAddCatalog.getRawValue())
   this.yearStart = +(this.formAddCatalog.get('startYear').value);
    this.yearEnd = +(this.formAddCatalog.get('endYear').value);
    this.note = this.formAddCatalog.get('note').value;
    this.status = +(this.formAddCatalog.get('status').value);
    console.log(this.yearStart + ""  + this.yearEnd + ""  + this.note + ""  + this.status);
   this.catalogService.addCatalog(this.yearStart, this.yearEnd, this.note,this.status).subscribe( data => {
    this.tmp = data;
    this.resetForm(this.formAddCatalog);  
    this.getAllCatalogs();
    this.pinotify.showSuccessInsert("Add a catalog success !")
      
   })
  }

  editCatalog(){
    this.yearStart = +(this.formEditCatalog.get('startYear').value);
    this.yearEnd = +(this.formEditCatalog.get('endYear').value);
    this.note = this.formEditCatalog.get('note').value;
    this.status = +(this.formEditCatalog.get('status').value);
    console.log(this.catalog.CATA_ID)
    return this.catalogService.editCatalog(this.catalog.CATA_ID,this.yearStart,this.yearEnd,this.note,this.status).subscribe(res => {
        this.getAllCatalogs();
        this.pinotify.showSuccessInsert("Edit a catalog success !")
    })

  }

  resetForm(form : FormGroup) {
    form.reset();
    if(form === this.formAddCatalog){
      this.formAddCatalog.setValue({
        'startYear' : null,
        'endYear' : null,
        'note' : null,
        'status' : 1,
      });
      this.valStartYear = false;
      this.valEndYear = false;  
      this.submitNull = false;  
    }if(form === this.formEditCatalog) {
      this.getACatalog(this.catalog.CATA_ID);
      this.valSY = false;
      this.valEY = false;
    }
 
   
  }

  validationStartYearAndEndYear(){
    this.yearStart = this.formAddCatalog.get('startYear').value;
    this.yearEnd = this.formAddCatalog.get('endYear').value;
    if((this.yearStart > this.yearEnd) && (this.yearEnd - this.yearStart === 1)){
      return true;
    }else{
      return false;
    }
    
  }

  validataionStartYear() : ValidatorFn {
    return (e : AbstractControl) : { [key: string]: any } => {
      if( +(this.formEditCatalog.get('endYear').value) - +(e.value) === 1){
        return {'invailed' : true};
      }
      return null;
    }    
  };

  checkStartYear(){
    var tempStartYear = this.formAddCatalog.get("startYear").value;
    var tempEndYear = this.formAddCatalog.get("endYear").value;
   
    if(tempEndYear !== ""){
      if(tempStartYear >= tempEndYear) {   
        this.valStartYear = true;
        this.valEndYear = true;
        this.submitNull = true;
     
      }   else{
        this.valStartYear = false;
        this.valEndYear = false;
        this.submitNull = false;
       
      }
    } 
  }

  checkSY(){
    var tempStartYear = this.formEditCatalog.get("startYear").value;
    var tempEndYear = this.formEditCatalog.get("endYear").value;
   
    if(tempEndYear !== ""){
      if(tempStartYear >= tempEndYear) {   
        this.valSY = true;
        this.valEY = true;
     
      }   else{
        this.valSY = false;
        this.valEY = false;
       
      }
    } 
  }


  checkEndYear() {
    var tempStartYear = this.formAddCatalog.get("startYear").value;
    var tempEndYear = this.formAddCatalog.get("endYear").value;
   console.log(tempStartYear + " " + tempEndYear)
    if(tempStartYear !== ""){
      if(tempStartYear >= tempEndYear) {   
        this.valStartYear = true;
        this.valEndYear = true;
        this.submitNull = true;
      }   else{
        this.valStartYear = false;
        this.valEndYear = false;
        this.submitNull = false;
      }
    } 
  }

  checkEY(){
    var tempStartYear = this.formEditCatalog.get("startYear").value;
    var tempEndYear = this.formEditCatalog.get("endYear").value;
   
    if(tempEndYear !== ""){
      if(tempStartYear >= tempEndYear) {   
        this.valSY = true;
        this.valEY = true;
     
      }   else{
        this.valSY = false;
        this.valEY = false;
       
      }
    } 
  }

}

 
  
