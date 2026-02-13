import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaAutod } from './halda-autod';

describe('HaldaAutod', () => {
  let component: HaldaAutod;
  let fixture: ComponentFixture<HaldaAutod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaAutod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaAutod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
