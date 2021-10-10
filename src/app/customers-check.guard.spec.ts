import { TestBed } from '@angular/core/testing';

import { CustomersCheckGuard } from './customers-check.guard';

describe('CustomersCheckGuard', () => {
  let guard: CustomersCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomersCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
