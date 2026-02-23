import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplier1 } from './supplier1';

describe('Supplier1', () => {
  let component: Supplier1;
  let fixture: ComponentFixture<Supplier1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supplier1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supplier1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
