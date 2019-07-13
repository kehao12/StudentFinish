import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakeChangeComponent } from './intake-change.component';

describe('IntakeChangeComponent', () => {
  let component: IntakeChangeComponent;
  let fixture: ComponentFixture<IntakeChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakeChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
