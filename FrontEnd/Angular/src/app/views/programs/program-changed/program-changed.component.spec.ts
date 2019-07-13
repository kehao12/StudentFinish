import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramChangedComponent } from './program-changed.component';

describe('ProgramChangedComponent', () => {
  let component: ProgramChangedComponent;
  let fixture: ComponentFixture<ProgramChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
