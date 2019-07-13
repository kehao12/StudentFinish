import { Component, OnDestroy, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup,Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Passwordmatch } from './passwordVali';
import { UserService } from '../../shared/user.service';
import { PnotifyService } from '../../shared/pnotify.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import * as $ from "jquery";
import { User } from '../../shared/user.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
  @ViewChild('ChangePwModal') changePwModal: ModalDirective;
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  changePassWordForm: FormGroup;
  profileForm : FormGroup;
  valCurrentPW : boolean = false;
  valNewPwCompareConfirmPw : boolean = false;
  date : Date;
  
  constructor(
    private router: Router, 
    private cookieService : CookieService,
    private formBuilder: FormBuilder,
    private userService : UserService,
    private pnotify : PnotifyService,
    @Inject(DOCUMENT) _document?: any,
            
  ) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
      
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
  ngOnInit(): void {
    this.changePassWordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validator: Passwordmatch.matchPassword
    });
    this.profileForm = this.formBuilder.group({
      lastName : ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      birthDay: [''],
      gender: [''],
      phone: ['', [Validators.pattern("(09|03|07|08|05)+([0-9]{8})")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$")]],
      address: ['', [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  logOut(){
    this.cookieService.set('token', null);
    this.cookieService.set('username', null);
    this.router.navigate(['/login']);
    
  }

  resetForm(form : FormGroup) {
    form.reset();
  }

  changePassWord() {
    var currentPw = this.changePassWordForm.get('currentPassword').value;
    var newPw = this.changePassWordForm.get('newPassword').value;
    var username = this.cookieService.get('username');
    this.userService.changePw(currentPw,newPw,username).subscribe(data => {
     
      if(data.status == 0) {
        this.resetForm(this.changePassWordForm);
        this.pnotify.showSuccessInsert(data.message);
        
      }else{
        this.pnotify.showError(data.message);
      }
    })
  }

  getMyProfile() {
    this.userService.getMyProfile(this.cookieService.get('username')).subscribe(data => {
      var birthDay = data.BIRTH_DAY + "";
      
      this.profileForm.setValue({
        'lastName' : data.LAST_NAME,
        'firstName': data.FIRST_NAME,
        'birthDay': data.BIRTH_DAY,
        'gender': data.GENDER,
        'phone': data.PHONE,
        'email': data.EMAIL,
        'address': data.ADDRESS,
      })
      $("#birthDay").val(birthDay.slice(0,10));
    })
  }

  updateProfile() {
    var username = this.cookieService.get('username');
    var FIRST_NAME = this.profileForm.get('firstName').value;
    var LAST_NAME = this.profileForm.get('lastName').value;
    var BIRTH_DAY = this.profileForm.get('birthDay').value;
    var GENDER = +(this.profileForm.get('gender').value);
    var PHONE = this.profileForm.get('phone').value;
    var EMAIL = this.profileForm.get('email').value;
    var ADDRESS = this.profileForm.get('address').value;
  
    this.userService.updateProfile(username,LAST_NAME,FIRST_NAME,BIRTH_DAY,GENDER,PHONE,EMAIL,ADDRESS).subscribe(data => {
      var birthDay = data.BIRTH_DAY + "";
      this.profileForm.setValue({
        'lastName' : data.LAST_NAME,
        'firstName': data.FIRST_NAME,
        'birthDay': data.BIRTH_DAY,
        'gender': data.GENDER,
        'phone': data.PHONE,
        'email': data.EMAIL,
        'address': data.ADDRESS,
      })
      $("#birthDay").val(birthDay.slice(0,10));
      this.pnotify.showSuccessInsert("Update success !");
    })
  }

  
}
