import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessconsComponent } from './lesscons.component';

describe('LessconsComponent', () => {
  let component: LessconsComponent;
  let fixture: ComponentFixture<LessconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
