import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CatalogService } from '../../../shared/catalog.service';
import { PnotifyService } from '../../../shared/pnotify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: CategoryService, private pnotify: PnotifyService
    ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
      this.inserRecord(form);

    }
    inserRecord(form: NgForm) {
    this.service.postCategory(form.value).subscribe(res => {
      this.pnotify.showSuccessInsert('Inserted ' + form.value.NAME_EN  + ' Success');
      this.service.refreshList(); });
    }
}
