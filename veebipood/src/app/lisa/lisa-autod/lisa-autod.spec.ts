import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaAutod } from './lisa-autod';

describe('LisaAutod', () => {
  let component: LisaAutod;
  let fixture: ComponentFixture<LisaAutod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaAutod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaAutod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
