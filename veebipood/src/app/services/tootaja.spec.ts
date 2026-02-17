import { TestBed } from '@angular/core/testing';

import { Tootaja } from './tootaja.service';

describe('Tootaja', () => {
  let service: Tootaja;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tootaja);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
