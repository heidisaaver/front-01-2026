import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaTootaja } from './muuda-tootaja';

describe('MuudaTootaja', () => {
  let component: MuudaTootaja;
  let fixture: ComponentFixture<MuudaTootaja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaTootaja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaTootaja);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
