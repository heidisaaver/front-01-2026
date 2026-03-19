import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductlist } from './admin-productlist';

describe('AdminProductlist', () => {
  let component: AdminProductlist;
  let fixture: ComponentFixture<AdminProductlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
