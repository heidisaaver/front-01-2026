import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rendiseadmed } from './rendiseadmed';

describe('Rendiseadmed', () => {
  let component: Rendiseadmed;
  let fixture: ComponentFixture<Rendiseadmed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rendiseadmed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rendiseadmed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
