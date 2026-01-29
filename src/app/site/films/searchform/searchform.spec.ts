import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searchform } from './searchform';

describe('Searchform', () => {
  let component: Searchform;
  let fixture: ComponentFixture<Searchform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Searchform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Searchform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
