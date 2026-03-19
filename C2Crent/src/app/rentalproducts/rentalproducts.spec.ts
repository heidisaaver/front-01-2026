import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rentalproducts } from './rentalproducts';

describe('Rentalproducts', () => {
  let component: Rentalproducts;
  let fixture: ComponentFixture<Rentalproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rentalproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rentalproducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
