import { Injectable, ViewChild } from '@angular/core';
import { Student } from './student.model';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { IntakeService } from './intake.service';
import { CatalogService } from './catalog.service';
import { ProgramService } from './program.service';
import { TypestudentService } from './typestudent.service';
import { Intake } from './intake.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  formData: Student;
  list: Student[];
  formDataI: Student;
  @ViewChild('modal') modal: ModalDirective;
  constructor( private api: ApiService , private http: HttpClient, private sanitizer: DomSanitizer,
    // tslint:disable-next-line:no-shadowed-variable
    private Intake: IntakeService,
    private Catalog: CatalogService,
    private Program: ProgramService,
    private TypeStudent: TypestudentService
    ) {  }
    intakes: [Intake];
  id: number;

  public imagePath;
  imgURL: any;
  public message: string;
  resetForm() {
    this.formData = {
    STU_ID: '',
    INTAKE_ID: null,
    STUTYPE_ID: 1,
    CONTACT_ID: null,
    CATA_ID: 1,
    PRO_ID: null,
    HCCSP_ID: '',
    HCCS_EMPID: '',
    BARCODE: '',
    CANDI_ID: '',
    FRIST_NAME: '',
    LAST_NAME: '',
    BIRTH_DAY: null,
    PLACE_BIRTH: '',
    HOME_COUNTRY: '',
    GENDER: 0,
    PHONE: '',
    EMAIL: '',
    PERSON_ID: '',
    HOBBY: '',
    PER_ADDRESS: '',
    PER_CITY: '',
    PER_COUNTRY: '',
    PORTAL_ADDRESS: '',
    PORTAL_CITY: '',
    PROTAL_COUNTRY: '',
    IMG: '',
    STATUS: 1,
  };
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
  refresh() {
    this.refreshList();
    this.Intake.refreshList();
    this.Catalog.refreshList();
    this.Program.refreshList();
    this.TypeStudent.refreshList();
  }
  preview(files?) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.formData.IMG = this.imgURL;
    };
  }

  loadID(id: number) {
    this.id = id;
    }

  chooseFile() {
    const uploadButton = document.querySelector('.browse-btn');
  const fileInfo = document.querySelector('.file-info');
  const realInput = document.getElementById('real-input');
    realInput.click();
  }

showModal(event = null, stu: Student) {
  if (event != null) {
    event.preventDefault();
  }
  this.refresh();
  if (stu != null) {
    this.formData = Object.assign({}, stu);
    this.formDataI = stu;
  } else {
    this.resetForm();
  }
}

  checkSTUID(code: string): boolean {
    if ( this.list === null) { return true; }
    if ( code === '' || code === null) { return true; }
    for (const stu of this.list) {
    if (stu.STU_ID.toLowerCase() === code.toLowerCase()) {
    return false;
    }
    }
  return true;

}


checkHCCSP_ID(code: string): boolean {
  if ( this.list === null) { return true; }
  if ( code === '' || code === null) { return true; }
  for (const stu of this.list) {
  if (stu.HCCSP_ID.toLowerCase() === code.toLowerCase() ) {
  return false;
  }
  }
return true;

}
checkHCCS_EMPID(code: string): boolean {
if ( this.list === null) { return true; }
if ( code === '' || code === null) { return true; }
for (const stu of this.list) {
if (stu.HCCS_EMPID.toLowerCase() === code.toLowerCase() ) {
return false;
}
}
return true;

}

checkBARCODE(code: string): boolean {
if ( this.list === null) { return true; }
if ( code === '' || code === null) { return true; }
for (const stu of this.list) {
if (stu.BARCODE.toLowerCase() === code.toLowerCase() ) {
return false;
}
}
return true;

}

checkCANID(code: string): boolean {
if ( this.list === null) { return true; }
if ( code === '' || code === null) { return true; }
for (const stu of this.list) {
if (stu.CANDI_ID.toLowerCase() === code.toLowerCase() ) {
return false;
}
}
return true;

}

checkHCCSP_ID1(id: string, code: string): boolean {
  if ( this.list === null) { return true; }
  if ( code === '' || code === null) { return true; }
  for (const stu of this.list) {
  if (stu.HCCSP_ID.toLowerCase() === code.toLowerCase() && stu.STU_ID !== id) {
  return false;
  }
  }
return true;

}
checkHCCS_EMPID1(id: string, code: string): boolean {
if ( this.list === null) { return true; }
if ( code === '' || code === null) { return true; }
for (const stu of this.list) {
if (stu.HCCS_EMPID.toLowerCase() === code.toLowerCase() && stu.STU_ID !== id) {
return false;
}
}
return true;

}

checkBARCODE1(id: string, code: string): boolean {
if ( this.list === null) { return true; }
if ( code === '' || code === null) { return true; }
for (const stu of this.list) {
if (stu.BARCODE.toLowerCase() === code.toLowerCase() && stu.STU_ID !== id) {
return false;
}
}
return true;

}

checkCANID1(id: string, code: string): boolean {
if ( this.list === null) { return true; }
if ( code === '' || code === null) { return true; }
for (const stu of this.list) {
if (stu.CANDI_ID.toLowerCase() === code.toLowerCase() && stu.STU_ID !== id) {
return false;
}
}
return true;

}
  postStudent(formData: Student ) {
    return this.http.post(this.api.Url.student, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.student + '/')
    .toPromise().then(res => this.list = res as  Student[] );
  }
  putStudent(formData: Student ) {
    return this.http.put(this.api.Url.student + '/' + formData.STU_ID, formData);
  }
}

