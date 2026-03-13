import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rendikorv } from './rendikorv';

describe('Rendikorv', () => {
  let component: Rendikorv;
  let fixture: ComponentFixture<Rendikorv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rendikorv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rendikorv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
