import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tavakalkulaator } from './tavakalkulaator';

describe('Tavakalkulaator', () => {
  let component: Tavakalkulaator;
  let fixture: ComponentFixture<Tavakalkulaator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tavakalkulaator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tavakalkulaator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
