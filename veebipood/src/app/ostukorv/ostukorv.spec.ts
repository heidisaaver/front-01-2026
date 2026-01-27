import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ostukorv } from './ostukorv';

describe('Ostukorv', () => {
  let component: Ostukorv;
  let fixture: ComponentFixture<Ostukorv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ostukorv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ostukorv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
