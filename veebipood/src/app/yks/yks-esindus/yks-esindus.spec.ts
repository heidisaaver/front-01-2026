import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksEsindus } from './yks-esindus';

describe('YksEsindus', () => {
  let component: YksEsindus;
  let fixture: ComponentFixture<YksEsindus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksEsindus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksEsindus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
