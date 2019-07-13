import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterChangeComponent } from './semester-change.component';

describe('SemesterChangeComponent', () => {
  let component: SemesterChangeComponent;
  let fixture: ComponentFixture<SemesterChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
