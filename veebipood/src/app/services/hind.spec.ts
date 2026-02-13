import { TestBed } from '@angular/core/testing';

import { Hind } from './hind';

describe('Hind', () => {
  let service: Hind;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hind);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
