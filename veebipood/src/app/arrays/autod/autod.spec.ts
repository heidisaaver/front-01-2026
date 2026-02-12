import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autod } from './autod';

describe('Autod', () => {
  let component: Autod;
  let fixture: ComponentFixture<Autod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Autod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
