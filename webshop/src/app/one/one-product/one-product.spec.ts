import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProduct } from './one-product';

describe('OneProduct', () => {
  let component: OneProduct;
  let fixture: ComponentFixture<OneProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
