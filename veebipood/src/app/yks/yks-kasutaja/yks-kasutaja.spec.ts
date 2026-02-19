import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksKasutaja } from './yks-kasutaja';

describe('YksKasutaja', () => {
  let component: YksKasutaja;
  let fixture: ComponentFixture<YksKasutaja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksKasutaja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksKasutaja);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
