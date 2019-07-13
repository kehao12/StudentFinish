import { Injectable } from '@angular/core';
import { Lesson } from '../shared/lesson.model';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  [x: string]: any;
  formData: Lesson;
  formData1: Lesson;
  formDataI: Lesson;
  list: Lesson[];
  list1: Lesson[];
  constructor(private api: ApiService, private http: HttpClient) { }
  postLess(formData: Lesson) {
    return this.http.post(this.api.Url.lesson, formData);
  }

  putLess(formData: Lesson) {
    return this.http.put(this.api.Url.lesson + '/' + formData.LESS_ID, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.lesson)
    .toPromise().then(res => this.list = res as Lesson[]);
  }

  deleteLess(id: number) {
    return this.http.delete(this.api.Url.lesson + '/' + id);
  }
}
