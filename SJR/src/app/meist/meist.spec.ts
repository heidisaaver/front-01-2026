import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meist } from './meist';

describe('Meist', () => {
  let component: Meist;
  let fixture: ComponentFixture<Meist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
