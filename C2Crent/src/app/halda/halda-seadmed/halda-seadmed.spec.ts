import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaSeadmed } from './halda-seadmed';

describe('HaldaSeadmed', () => {
  let component: HaldaSeadmed;
  let fixture: ComponentFixture<HaldaSeadmed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaSeadmed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaSeadmed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
