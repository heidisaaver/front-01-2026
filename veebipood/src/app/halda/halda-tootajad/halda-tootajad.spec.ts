import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaTootajad } from './halda-tootajad';

describe('HaldaTootajad', () => {
  let component: HaldaTootajad;
  let fixture: ComponentFixture<HaldaTootajad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaTootajad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaTootajad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
