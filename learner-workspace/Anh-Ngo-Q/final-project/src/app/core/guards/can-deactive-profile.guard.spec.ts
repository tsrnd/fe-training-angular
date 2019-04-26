import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactiveProfileGuard } from './can-deactive-profile.guard';

describe('CanDeactiveProfileGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactiveProfileGuard]
    });
  });

  it('should ...', inject([CanDeactiveProfileGuard], (guard: CanDeactiveProfileGuard) => {
    expect(guard).toBeTruthy();
  }));
});
