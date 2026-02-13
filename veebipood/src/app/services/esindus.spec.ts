import { TestBed } from '@angular/core/testing';

import { Esindus } from './esindus';

describe('Esindus', () => {
  let service: Esindus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Esindus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
