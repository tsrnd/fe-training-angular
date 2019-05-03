import { TestBed, async, inject } from '@angular/core/testing';

import { KidsGuard } from './kids.guard';

describe('KidsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KidsGuard]
    });
  });

  it('should ...', inject([KidsGuard], (guard: KidsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
