import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avaleht } from './avaleht';

describe('Avaleht', () => {
  let component: Avaleht;
  let fixture: ComponentFixture<Avaleht>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avaleht]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Avaleht);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
