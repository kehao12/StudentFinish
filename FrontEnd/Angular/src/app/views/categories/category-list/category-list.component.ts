import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  dtOptions: DataTables.Settings = {};
  constructor(private service: CategoryService) { }

  ngOnInit() : void {
    this.dtOptions = {
      pageLength:5,
      language: {
        lengthMenu: 'Display <select>'+
          '<option value="5" selected>5</option>'+
          '<option value="10">10</option>'+
          '<option value="50">50</option>'+
          '<option value="100">100</option>'+
          '<option value="-1">All</option>'+
          '</select> records'
      }
  
    };
    this.service.refreshList();
  }
}
