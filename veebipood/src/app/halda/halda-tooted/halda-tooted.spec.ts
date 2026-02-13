import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaTooted } from './halda-tooted';

describe('HaldaTooted', () => {
  let component: HaldaTooted;
  let fixture: ComponentFixture<HaldaTooted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaTooted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaTooted);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
