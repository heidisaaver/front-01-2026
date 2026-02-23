import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supplier2 } from './supplier2';

describe('Supplier2', () => {
  let component: Supplier2;
  let fixture: ComponentFixture<Supplier2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supplier2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supplier2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
