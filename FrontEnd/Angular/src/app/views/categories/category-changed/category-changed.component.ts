import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';
import { NgForm } from '@angular/forms';
import { PnotifyService } from '../../../shared/pnotify.service';
@Component({
  selector: 'app-category-changed',
  templateUrl: './category-changed.component.html',
  styleUrls: ['./category-changed.component.css']
})
export class CategoryChangedComponent implements OnInit {

  constructor(private service: CategoryService, private pnotify: PnotifyService) { }

  ngOnInit() {
    this.service.resetForm();
  }
  onSubmit(form: NgForm) {
      this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.putCategory(form.value).subscribe(res => {
    this.pnotify.showSuccessInsert('Updated ' + form.value.NAME_EN + ' Success');
      this.service.refreshList();
  });
  }
}
