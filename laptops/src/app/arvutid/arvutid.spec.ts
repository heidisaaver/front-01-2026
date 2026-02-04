import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arvutid } from './arvutid';

describe('Arvutid', () => {
  let component: Arvutid;
  let fixture: ComponentFixture<Arvutid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arvutid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arvutid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
