import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessconChangeComponent } from './lesscon-change.component';

describe('LessconChangeComponent', () => {
  let component: LessconChangeComponent;
  let fixture: ComponentFixture<LessconChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessconChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessconChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
