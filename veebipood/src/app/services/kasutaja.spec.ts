import { TestBed } from '@angular/core/testing';

import { Kasutaja } from './kasutaja';

describe('Kasutaja', () => {
  let service: Kasutaja;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kasutaja);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
