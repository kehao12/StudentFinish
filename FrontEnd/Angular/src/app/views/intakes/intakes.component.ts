import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../../shared/intake.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-intakes',
  templateUrl: './intakes.component.html',
  styleUrls: ['./intakes.component.scss']
})
export class IntakesComponent implements OnInit {

  constructor(private service: IntakeService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm() {
    this.service.formData = {
    INTAKE_ID: null,
    CATA_ID: 1,
    INTAKE_CODE: '',
    INTAKE_NAME: '',
    STATUS: 1,
    };
  }
}
