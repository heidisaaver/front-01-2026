import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logisisse } from './logisisse';

describe('Logisisse', () => {
  let component: Logisisse;
  let fixture: ComponentFixture<Logisisse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logisisse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logisisse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
