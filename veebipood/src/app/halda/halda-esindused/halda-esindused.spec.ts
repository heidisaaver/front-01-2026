import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaEsindused } from './halda-esindused';

describe('HaldaEsindused', () => {
  let component: HaldaEsindused;
  let fixture: ComponentFixture<HaldaEsindused>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaEsindused]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaEsindused);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
