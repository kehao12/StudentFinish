import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../shared/student.service';
import { NgForm } from '@angular/forms';
import { Intake } from '../../../shared/intake.model';
import { IntakeService } from '../../../shared/intake.service';
import { CatalogService } from '../../../shared/catalog.service';
import { ProgramService } from '../../../shared/program.service';
import { TypestudentService } from '../../../shared/typestudent.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { ContactService } from '../../../shared/contact.service';
import { DocumentService } from '../../../shared/document.service';
import { CategoryService } from '../../../shared/category.service';
import * as $ from "jquery";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private service: StudentService, private Intake: IntakeService,
    private Catalog: CatalogService,
    private Program: ProgramService,
    private TypeStudent: TypestudentService,
    private pnotify: PnotifyService,
    private Contact: ContactService,
    private Document: DocumentService,
    private Category: CategoryService
    ) { }
  intakes: [Intake];
  id: number;

  public imagePath;
  imgURL: any;
  public message: string;
  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
    this.Intake.refreshList();
    this.Catalog.refreshList();
    this.Program.refreshList();
    this.TypeStudent.refreshList();
    this.Category.refreshList();
    console.log(this.Category.list);
  }

  preview(files?) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/ */) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.service.formData.IMG = this.imgURL;
    };
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
    STU_ID: '',
    INTAKE_ID: 1,
    STUTYPE_ID: 1,
    CONTACT_ID: null,
    CATA_ID: 1,
    PRO_ID: 1,
    HCCSP_ID: '',
    HCCS_EMPID: '',
    BARCODE: '',
    CANDI_ID: '',
    FRIST_NAME: '1',
    LAST_NAME: '1',
    BIRTH_DAY: null,
    PLACE_BIRTH: '1',
    HOME_COUNTRY: '0',
    GENDER: 1,
    PHONE: '0909323223',
    EMAIL: '1',
    PERSON_ID: '1',
    HOBBY: '1',
    PER_ADDRESS: '1',
    PER_CITY: '',
    PER_COUNTRY: 'VN',
    PORTAL_ADDRESS: '1',
    PORTAL_CITY: 'VN',
    PROTAL_COUNTRY: '1',
    IMG: '',
    STATUS: 1,
  };
  }
  chooseFile() {
    const uploadButton = document.querySelector('.browse-btn');
  const fileInfo = document.querySelector('.file-info');
  const realInput = document.getElementById('real-input');
    realInput.click();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.inserRecord(form);
    }

    inserRecord(form: NgForm) {
      this.Contact.loadForm(form.value.STU_ID);
       this.service.postStudent(form.value).subscribe(res => {
        this.Contact.postCon(this.Contact.formData1).subscribe(resq => {
   
        });
        if (this.Category.list.length>0)
        {
          for (const Cate of this.Category.list) {
            this.Document.loadForm(form.value.STU_ID,Cate.CATE_ID);
            this.Document.postDoc(this.Document.formData1).subscribe(resq => {
          });
          }
         }
        this.pnotify.showSuccessInsert('Insert Success'); 
        this.resetForm();
        this.service.refreshList();
         });
      }
    // this.resetForm(form);
      updateRecord(form: NgForm) {
      this.service.putStudent(form.value).subscribe(res => {
      this.service.refreshList(); });
      }
      loadID(id: number) {
      this.id = id;
      }

      checkSTUID(code: string): boolean {
        if ( this.service.list === null) { return true; }
        if ( code === '' || code === null) { return true; }
        for (const stu of this.service.list) {
        if (stu.STU_ID.toLowerCase() === code.toLowerCase() ) {
        return false;
        }
        }
      return true;

    }
    checkHCCSP_ID(code: string): boolean {
      if ( this.service.list === null) { return true; }
      if ( code === '' || code === null) { return true; }
      for (const stu of this.service.list) {
      if (stu.HCCSP_ID.toLowerCase() === code.toLowerCase() ) {
      return false;
      }
      }
    return true;

  }
  checkHCCS_EMPID(code: string): boolean {
    if ( this.service.list === null) { return true; }
    if ( code === '' || code === null) { return true; }
    for (const stu of this.service.list) {
    if (stu.HCCS_EMPID.toLowerCase() === code.toLowerCase() ) {
    return false;
    }
    }
  return true;

}

checkBARCODE(code: string): boolean {
  if ( this.service.list === null) { return true; }
  if ( code === '' || code === null) { return true; }
  for (const stu of this.service.list) {
  if (stu.BARCODE.toLowerCase() === code.toLowerCase() ) {
  return false;
  }
  }
return true;

}

checkCANID(code: string): boolean {
  if ( this.service.list === null) { return true; }
  if ( code === '' || code === null) { return true; }
  for (const stu of this.service.list) {
  if (stu.CANDI_ID.toLowerCase() === code.toLowerCase() ) {
  return false;
  }
  }
return true;

}

}
