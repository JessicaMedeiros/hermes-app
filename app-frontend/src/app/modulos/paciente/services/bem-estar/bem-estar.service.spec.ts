import { TestBed } from '@angular/core/testing';

import { BemEstarService } from './bem-estar.service';

describe('BemEstarService', () => {
  let service: BemEstarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BemEstarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
