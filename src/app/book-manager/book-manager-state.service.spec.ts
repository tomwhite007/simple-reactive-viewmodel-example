import { TestBed } from '@angular/core/testing';

import { BookManagerStateService } from './book-manager-state.service';

describe('BookManagerStateService', () => {
  let service: BookManagerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
