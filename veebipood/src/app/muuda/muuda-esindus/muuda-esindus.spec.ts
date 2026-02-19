import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaEsindus } from './muuda-esindus';

describe('MuudaEsindus', () => {
  let component: MuudaEsindus;
  let fixture: ComponentFixture<MuudaEsindus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaEsindus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaEsindus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
