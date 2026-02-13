import { TestBed } from '@angular/core/testing';

import { Toode } from './toode';

describe('Toode', () => {
  let service: Toode;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toode);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
