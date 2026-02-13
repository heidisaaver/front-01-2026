import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaHome } from './halda-home';

describe('HaldaHome', () => {
  let component: HaldaHome;
  let fixture: ComponentFixture<HaldaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaldaHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
