import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaKasutaja } from './muuda-kasutaja';

describe('MuudaKasutaja', () => {
  let component: MuudaKasutaja;
  let fixture: ComponentFixture<MuudaKasutaja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaKasutaja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaKasutaja);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
