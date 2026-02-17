import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seaded } from './seaded';

describe('Seaded', () => {
  let component: Seaded;
  let fixture: ComponentFixture<Seaded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seaded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seaded);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
