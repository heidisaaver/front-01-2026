import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maksimaalnekalkulaator } from './maksimaalnekalkulaator';

describe('Maksimaalnekalkulaator', () => {
  let component: Maksimaalnekalkulaator;
  let fixture: ComponentFixture<Maksimaalnekalkulaator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maksimaalnekalkulaator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maksimaalnekalkulaator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
