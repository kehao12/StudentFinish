import { Component, OnInit } from '@angular/core';
import { YearService } from '../../shared/year.service';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss']
})
export class YearsComponent implements OnInit {

  constructor(private service: YearService) { }

  ngOnInit() {
  }

}
