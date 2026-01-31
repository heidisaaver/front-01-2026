import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaTegelane } from './lisa-tegelane';

describe('LisaTegelane', () => {
  let component: LisaTegelane;
  let fixture: ComponentFixture<LisaTegelane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisaTegelane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisaTegelane);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
