import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentService } from '../../shared/document.service';
import { PnotifyService } from '../../shared/pnotify.service';
import { ModalDirective } from 'ngx-bootstrap';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-document-student',
  templateUrl: './document-student.component.html',
  styleUrls: ['./document-student.component.scss']
})
export class DocumentStudentComponent implements OnInit {

  @ViewChild('myModal') public myModal: ModalDirective;

   // tslint:disable-next-line:no-shadowed-variable
   constructor(private service: DocumentService,private Category: CategoryService, private pnotify: PnotifyService) { }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit() {
    this.Category.refreshList();
  }
  changecb(i: number)
  {
    console.log(i+"         "+ this.service.frm[i].CHECKBOX);
    this.service.frm[i].CHECKBOX= !this.service.frm[i].CHECKBOX;
  }
  updateRecord() {
    for (const doc of this.service.frm) {
      this.service.putDoc(doc).subscribe(res => {
    });
    }
    this.pnotify.showSuccessInsert('Updated Document Success');
  }

}
