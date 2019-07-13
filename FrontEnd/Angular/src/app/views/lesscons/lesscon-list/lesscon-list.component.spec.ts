import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessconListComponent } from './lesscon-list.component';

describe('LessconListComponent', () => {
  let component: LessconListComponent;
  let fixture: ComponentFixture<LessconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
