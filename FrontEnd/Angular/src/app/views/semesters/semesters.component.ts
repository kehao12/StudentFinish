import { Component, OnInit } from '@angular/core';
import { SemesterService } from '../../shared/semester.service';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.scss']
})
export class SemestersComponent implements OnInit {

  constructor(private service: SemesterService) { }

  ngOnInit() {
  }

}
