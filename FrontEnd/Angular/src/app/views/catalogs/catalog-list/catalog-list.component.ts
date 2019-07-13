import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatalogService } from '../../../shared/catalog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  constructor(private service: CatalogService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
}
