import { Component, OnInit } from '@angular/core';
import { MajorService } from '../../shared/major.service';

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.scss']
})
export class MajorsComponent implements OnInit {

  constructor(private service: MajorService) { }

  ngOnInit() {
  }

}
