import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Laenukalkulaator } from './laenukalkulaator';

describe('Laenukalkulaator', () => {
  let component: Laenukalkulaator;
  let fixture: ComponentFixture<Laenukalkulaator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Laenukalkulaator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Laenukalkulaator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
