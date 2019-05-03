import { TestBed, async, inject } from '@angular/core/testing';

import { FavoriteGuard } from './favorite.guard';

describe('FavoriteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteGuard]
    });
  });

  it('should ...', inject([FavoriteGuard], (guard: FavoriteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
