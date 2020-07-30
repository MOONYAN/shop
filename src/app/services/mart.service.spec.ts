import { TestBed } from '@angular/core/testing';

import { MartService } from './mart.service';

describe('MartService', () => {
  let service: MartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
