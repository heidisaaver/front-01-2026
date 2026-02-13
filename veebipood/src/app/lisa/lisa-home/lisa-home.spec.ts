import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaHome } from './lisa-home';

describe('LisaHome', () => {
  let component: LisaHome;
  let fixture: ComponentFixture<LisaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
