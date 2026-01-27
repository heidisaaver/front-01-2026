import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esindused } from './esindused';

describe('Esindused', () => {
  let component: Esindused;
  let fixture: ComponentFixture<Esindused>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Esindused]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esindused);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
