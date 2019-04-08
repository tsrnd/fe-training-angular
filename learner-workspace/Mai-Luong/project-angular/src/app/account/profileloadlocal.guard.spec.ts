import { TestBed, async, inject } from '@angular/core/testing';

import { ProfileloadlocalGuard } from './profileloadlocal.guard';

describe('ProfileloadlocalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileloadlocalGuard]
    });
  });

  it('should ...', inject([ProfileloadlocalGuard], (guard: ProfileloadlocalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
