import { TestBed } from '@angular/core/testing';

import { BookManagerImperativeStateService } from './book-manager-imperative-state.service';

describe('BookManagerImperativeStateService', () => {
  let service: BookManagerImperativeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagerImperativeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
