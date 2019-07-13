import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

export interface ResLogin {
  access_token: string
    token_type: string,
    expires_in: number,
    userName: string,
    email: string,
    status: number,
    
}

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  headers: HttpHeaders;
  grant_type = "password";
  constructor(private http : HttpClient,
              private urlService : ApiService
    ) {  }
  ngOnInit(): void {
   this.headers = new HttpHeaders ({
    'Content-Type': 'application/x-www-form-urlencoded'
   });
  }

  login(username : string , password : string): Observable<ResLogin> {
    
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', this.grant_type);

    return this.http.post<ResLogin>(this.urlService.Url.login,body, {headers : this.headers})
  }
}
