import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lisamine } from './lisamine';

describe('Lisamine', () => {
  let component: Lisamine;
  let fixture: ComponentFixture<Lisamine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lisamine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lisamine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
