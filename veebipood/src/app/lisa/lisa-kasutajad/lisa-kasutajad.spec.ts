import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaKasutajad } from './lisa-kasutajad';

describe('LisaKasutajad', () => {
  let component: LisaKasutajad;
  let fixture: ComponentFixture<LisaKasutajad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaKasutajad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaKasutajad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
