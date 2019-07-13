import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessconComponent } from './lesscon.component';

describe('LessconComponent', () => {
  let component: LessconComponent;
  let fixture: ComponentFixture<LessconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
