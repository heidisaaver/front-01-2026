import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tootajad } from './tootajad';

describe('Tootajad', () => {
  let component: Tootajad;
  let fixture: ComponentFixture<Tootajad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tootajad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tootajad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
