import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tagasiside } from './tagasiside';

describe('Tagasiside', () => {
  let component: Tagasiside;
  let fixture: ComponentFixture<Tagasiside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tagasiside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tagasiside);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
