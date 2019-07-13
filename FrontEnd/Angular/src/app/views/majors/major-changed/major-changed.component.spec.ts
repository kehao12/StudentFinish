import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorChangedComponent } from './major-changed.component';

describe('MajorChangedComponent', () => {
  let component: MajorChangedComponent;
  let fixture: ComponentFixture<MajorChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
