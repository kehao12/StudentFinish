import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  a : number[];
  constructor(private api: ApiService , private http: HttpClient) { }
  get()
  {
    this.http.get(this.api.Url.Values + '/')
    .toPromise().then(res => this.a = res as number[]);
  }
}
