import { TestBed, async, inject } from '@angular/core/testing';

import { ProfileprefetchGuard } from './profileprefetch.guard';

describe('ProfileprefetchGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileprefetchGuard]
    });
  });

  it('should ...', inject([ProfileprefetchGuard], (guard: ProfileprefetchGuard) => {
    expect(guard).toBeTruthy();
  }));
});
