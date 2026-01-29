import { TestBed } from '@angular/core/testing';
import { Searchmovie } from './searchmovie';

describe('Searchmovie', () => {
  let service: Searchmovie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Searchmovie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
