import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChangedComponent } from './category-changed.component';

describe('CategoryChangedComponent', () => {
  let component: CategoryChangedComponent;
  let fixture: ComponentFixture<CategoryChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
