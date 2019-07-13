import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {

  constructor(private service: CategoryService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }


}
