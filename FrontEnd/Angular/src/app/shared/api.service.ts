import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}
  baseurl = "https://localhost:44388/"
  baseurlAPI = 'https://localhost:44388/api/';
  Url = {
    intake: this.baseurlAPI + 'INTAKE',
    category: this.baseurlAPI + 'CATELORY',
    catalog: this.baseurlAPI + 'CATALOG',
    catalogs: this.baseurlAPI + 'CATALOGs',
    semester: this.baseurlAPI + 'SEMESTER',
    year: this.baseurlAPI + 'YEAR',
    years: this.baseurlAPI + 'YEARs',
    student: this.baseurlAPI + 'STUDENT',
    program: this.baseurlAPI + 'PROGRAM',
    typestudent: this.baseurlAPI + 'TYPE_STUDENT',
    branch: this.baseurlAPI + 'BRANCH',
    user: this.baseurlAPI + 'USER',
    document: this.baseurlAPI + 'DOCUMENT',
    contact: this.baseurlAPI + 'CONTACT',
    login: this.baseurl + "login",
    changePassword : this.baseurlAPI + "ChangePassWord",
    User : this.baseurlAPI + "myUser",
    UpdateProfile : this.baseurlAPI + "updateUser",
    Values : this.baseurlAPI + "values",
    lesson: this.baseurlAPI + 'LESSON',
    condition: this.baseurlAPI + 'LESS_CONDITION'

  };
}
