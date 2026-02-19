import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksHind } from './yks-hind';

describe('YksHind', () => {
  let component: YksHind;
  let fixture: ComponentFixture<YksHind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksHind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksHind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
