import { TestBed } from '@angular/core/testing';

import { ListProductResolveService } from './list-product-resolve.service';

describe('ListProductResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProductResolveService = TestBed.get(ListProductResolveService);
    expect(service).toBeTruthy();
  });
});
