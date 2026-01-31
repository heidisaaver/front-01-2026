import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uudised } from './uudised';

describe('Uudised', () => {
  let component: Uudised;
  let fixture: ComponentFixture<Uudised>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uudised]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uudised);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
