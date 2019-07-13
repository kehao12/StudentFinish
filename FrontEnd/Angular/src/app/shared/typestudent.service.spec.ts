import { TestBed } from '@angular/core/testing';

import { TypestudentService } from './typestudent.service';

describe('TypestudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypestudentService = TestBed.get(TypestudentService);
    expect(service).toBeTruthy();
  });
});
