import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Floods } from './floods';

describe('Floods', () => {
  let component: Floods;
  let fixture: ComponentFixture<Floods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Floods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Floods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
