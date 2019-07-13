import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakesComponent } from './intakes.component';

describe('IntakesComponent', () => {
  let component: IntakesComponent;
  let fixture: ComponentFixture<IntakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
