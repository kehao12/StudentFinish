import { Component, OnInit } from '@angular/core';
import { MajorService } from '../../../shared/major.service';

@Component({
  selector: 'app-major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.scss']
})
export class MajorListComponent implements OnInit {

  constructor(private service: MajorService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
