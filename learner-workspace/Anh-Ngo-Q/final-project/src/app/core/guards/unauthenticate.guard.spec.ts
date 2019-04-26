import { TestBed, async, inject } from '@angular/core/testing';

import { UnauthenticateGuard } from './unauthenticate.guard';

describe('UnauthenticateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnauthenticateGuard]
    });
  });

  it('should ...', inject([UnauthenticateGuard], (guard: UnauthenticateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
