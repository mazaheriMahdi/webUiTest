import { TestBed } from '@angular/core/testing';

import { NumberUtilService } from './number.util.service';

describe('NumberUtilService', () => {
  let service: NumberUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
