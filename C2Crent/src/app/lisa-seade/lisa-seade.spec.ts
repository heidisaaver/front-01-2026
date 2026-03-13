import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaSeade } from './lisa-seade';

describe('LisaSeade', () => {
  let component: LisaSeade;
  let fixture: ComponentFixture<LisaSeade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaSeade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaSeade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
