import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaHinnad } from './halda-hinnad';

describe('HaldaHinnad', () => {
  let component: HaldaHinnad;
  let fixture: ComponentFixture<HaldaHinnad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaHinnad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaHinnad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
