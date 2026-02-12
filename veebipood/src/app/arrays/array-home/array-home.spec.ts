import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayHome } from './array-home';

describe('ArrayHome', () => {
  let component: ArrayHome;
  let fixture: ComponentFixture<ArrayHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
