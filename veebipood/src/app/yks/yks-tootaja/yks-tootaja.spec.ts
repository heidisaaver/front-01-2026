import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksTootaja } from './yks-tootaja';

describe('YksTootaja', () => {
  let component: YksTootaja;
  let fixture: ComponentFixture<YksTootaja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksTootaja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksTootaja);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
