import { TestBed, async, inject } from '@angular/core/testing';

import { ProfileResolveGuard } from './profile-resolve.guard';

describe('ProfileResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileResolveGuard]
    });
  });

  it('should ...', inject([ProfileResolveGuard], (guard: ProfileResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
