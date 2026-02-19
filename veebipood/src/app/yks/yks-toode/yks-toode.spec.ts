import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksToode } from './yks-toode';

describe('YksToode', () => {
  let component: YksToode;
  let fixture: ComponentFixture<YksToode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksToode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksToode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
