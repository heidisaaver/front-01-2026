import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplier3 } from './supplier3';

describe('Supplier3', () => {
  let component: Supplier3;
  let fixture: ComponentFixture<Supplier3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supplier3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supplier3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
