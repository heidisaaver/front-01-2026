import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaEsindused } from './lisa-esindused';

describe('LisaEsindused', () => {
  let component: LisaEsindused;
  let fixture: ComponentFixture<LisaEsindused>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaEsindused]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaEsindused);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
