import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tooted } from './tooted';

describe('Tooted', () => {
  let component: Tooted;
  let fixture: ComponentFixture<Tooted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tooted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tooted);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
