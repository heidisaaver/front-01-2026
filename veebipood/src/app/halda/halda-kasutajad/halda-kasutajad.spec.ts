import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaKasutajad } from './halda-kasutajad';

describe('HaldaKasutajad', () => {
  let component: HaldaKasutajad;
  let fixture: ComponentFixture<HaldaKasutajad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaKasutajad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaKasutajad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
