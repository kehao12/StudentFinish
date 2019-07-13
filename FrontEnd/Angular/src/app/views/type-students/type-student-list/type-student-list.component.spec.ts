import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStudentListComponent } from './type-student-list.component';

describe('TypeStudentListComponent', () => {
  let component: TypeStudentListComponent;
  let fixture: ComponentFixture<TypeStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
