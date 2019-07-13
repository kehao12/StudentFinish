import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';
import { LoginService } from '../../shared/login.service';
import { PnotifyService } from '../../shared/pnotify.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  message = '';
  userName = '';
  password = '';
  constructor(private service: UserService,
    private router: Router,
    private loginService : LoginService,
    private pnotify : PnotifyService,
    private cookieService: CookieService
    ) {}
  login() {
    if(this.userName == '' || this.password == ''){
      this.pnotify.showError("username or password null")
    }else{
    this.loginService.login(this.userName, this.password).subscribe(data => {
     this.cookieService.set('token', data.token_type + " " + data.access_token);
     this.cookieService.set('username', data.userName);
   
     this.pnotify.showSuccessInsert("login success");
        this.router.navigate(['/users']);
    }, err => this.pnotify.showError("Wrong username or password"));
  }
  }
}
