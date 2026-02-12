import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kasutajad } from './kasutajad';

describe('Kasutajad', () => {
  let component: Kasutajad;
  let fixture: ComponentFixture<Kasutajad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kasutajad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kasutajad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
