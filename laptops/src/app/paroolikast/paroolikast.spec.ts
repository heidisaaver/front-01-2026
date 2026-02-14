import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paroolikast } from './paroolikast';

describe('Paroolikast', () => {
  let component: Paroolikast;
  let fixture: ComponentFixture<Paroolikast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paroolikast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paroolikast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
