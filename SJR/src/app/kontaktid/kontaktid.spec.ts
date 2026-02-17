import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kontaktid } from './kontaktid';

describe('Kontaktid', () => {
  let component: Kontaktid;
  let fixture: ComponentFixture<Kontaktid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kontaktid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kontaktid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
