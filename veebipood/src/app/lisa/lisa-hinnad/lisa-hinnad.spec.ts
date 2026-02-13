import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaHinnad } from './lisa-hinnad';

describe('LisaHinnad', () => {
  let component: LisaHinnad;
  let fixture: ComponentFixture<LisaHinnad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaHinnad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaHinnad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
