import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaToode } from './muuda-toode';

describe('MuudaToode', () => {
  let component: MuudaToode;
  let fixture: ComponentFixture<MuudaToode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaToode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaToode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
