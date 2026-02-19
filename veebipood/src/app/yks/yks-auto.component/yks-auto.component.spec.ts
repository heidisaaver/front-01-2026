import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksAutoComponent } from './yks-auto.component';

describe('YksAutoComponent', () => {
  let component: YksAutoComponent;
  let fixture: ComponentFixture<YksAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YksAutoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
