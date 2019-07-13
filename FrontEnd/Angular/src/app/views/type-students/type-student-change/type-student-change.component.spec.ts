import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStudentChangeComponent } from './type-student-change.component';

describe('TypeStudentChangeComponent', () => {
  let component: TypeStudentChangeComponent;
  let fixture: ComponentFixture<TypeStudentChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeStudentChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStudentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
