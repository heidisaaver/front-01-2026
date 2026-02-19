import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaHind } from './muuda-hind';

describe('MuudaHind', () => {
  let component: MuudaHind;
  let fixture: ComponentFixture<MuudaHind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaHind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaHind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
