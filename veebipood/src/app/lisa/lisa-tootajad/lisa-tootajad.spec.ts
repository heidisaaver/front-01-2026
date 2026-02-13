import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaTootajad } from './lisa-tootajad';

describe('LisaTootajad', () => {
  let component: LisaTootajad;
  let fixture: ComponentFixture<LisaTootajad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaTootajad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaTootajad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
