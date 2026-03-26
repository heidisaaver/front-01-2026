import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rendiseade } from './rendiseade';

describe('Rendiseade', () => {
  let component: Rendiseade;
  let fixture: ComponentFixture<Rendiseade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rendiseade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rendiseade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
