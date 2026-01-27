import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kinkekaart } from './kinkekaart';

describe('Kinkekaart', () => {
  let component: Kinkekaart;
  let fixture: ComponentFixture<Kinkekaart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kinkekaart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kinkekaart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
