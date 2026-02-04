import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaUudis } from './lisa-uudis';

describe('LisaUudis', () => {
  let component: LisaUudis;
  let fixture: ComponentFixture<LisaUudis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaUudis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaUudis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
