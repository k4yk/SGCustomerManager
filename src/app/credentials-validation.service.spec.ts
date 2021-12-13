import { TestBed } from '@angular/core/testing';

import { CredentialsValidationService } from './credentials-validation.service';

describe('CredentialsValidationService', () => {
  let service: CredentialsValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredentialsValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
