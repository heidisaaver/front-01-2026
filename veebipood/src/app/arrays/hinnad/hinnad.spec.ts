import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hinnad } from './hinnad';

describe('Hinnad', () => {
  let component: Hinnad;
  let fixture: ComponentFixture<Hinnad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hinnad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hinnad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
