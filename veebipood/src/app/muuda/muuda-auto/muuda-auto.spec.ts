import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaAuto } from './muuda-auto';

describe('MuudaAuto', () => {
  let component: MuudaAuto;
  let fixture: ComponentFixture<MuudaAuto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaAuto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaAuto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
