import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Films } from './films';

describe('Films', () => {
  let component: Films;
  let fixture: ComponentFixture<Films>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Films]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Films);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
