import { TestBed, async, inject } from '@angular/core/testing';

import { WomanGuard } from './woman.guard';

describe('WomanGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WomanGuard]
    });
  });

  it('should ...', inject([WomanGuard], (guard: WomanGuard) => {
    expect(guard).toBeTruthy();
  }));
});
