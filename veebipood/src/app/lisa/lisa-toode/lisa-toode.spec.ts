import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaToode } from './lisa-toode';

describe('LisaToode', () => {
  let component: LisaToode;
  let fixture: ComponentFixture<LisaToode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaToode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaToode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
