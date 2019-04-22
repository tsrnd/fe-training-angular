import { TestBed } from '@angular/core/testing';

import { AddFavoriteService } from './add-favorite.service';

describe('AddFavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFavoriteService = TestBed.get(AddFavoriteService);
    expect(service).toBeTruthy();
  });
});
