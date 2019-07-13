import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeStudentsComponent } from './type-students.component';

describe('TypeStudentsComponent', () => {
  let component: TypeStudentsComponent;
  let fixture: ComponentFixture<TypeStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
