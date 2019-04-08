import { TestBed } from '@angular/core/testing';

import { DeactivateDialogService } from './deactivate-dialog.service';

describe('DeactivateDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactivateDialogService = TestBed.get(DeactivateDialogService);
    expect(service).toBeTruthy();
  });
});
