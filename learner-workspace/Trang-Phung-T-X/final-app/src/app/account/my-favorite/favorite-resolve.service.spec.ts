import { TestBed } from '@angular/core/testing';

import { FavoriteResolveService } from './favorite-resolve.service';

describe('FavoriteResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteResolveService = TestBed.get(FavoriteResolveService);
    expect(service).toBeTruthy();
  });
});
