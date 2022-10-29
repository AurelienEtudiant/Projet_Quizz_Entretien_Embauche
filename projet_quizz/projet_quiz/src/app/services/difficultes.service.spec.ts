import { TestBed } from '@angular/core/testing';

import { DifficultesService } from './difficultes.service';

describe('CategoriesService', () => {
  let service: DifficultesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifficultesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
