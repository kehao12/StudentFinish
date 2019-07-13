import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStudentComponent } from './type-student.component';

describe('TypeStudentComponent', () => {
  let component: TypeStudentComponent;
  let fixture: ComponentFixture<TypeStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
