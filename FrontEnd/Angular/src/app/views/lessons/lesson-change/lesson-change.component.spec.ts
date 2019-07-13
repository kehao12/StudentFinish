import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonChangeComponent } from './lesson-change.component';

describe('LessonChangeComponent', () => {
  let component: LessonChangeComponent;
  let fixture: ComponentFixture<LessonChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
