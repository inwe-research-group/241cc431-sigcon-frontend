import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PredioService } from './predio.service';

describe('PredioService', () => {
  let service: PredioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PredioService],
    });
    service = TestBed.inject(PredioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
