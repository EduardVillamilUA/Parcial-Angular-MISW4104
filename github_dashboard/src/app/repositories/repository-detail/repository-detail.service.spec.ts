/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepositoryDetailService } from './repository-detail.service';

describe('Service: RepositoryDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryDetailService]
    });
  });

  it('should ...', inject([RepositoryDetailService], (service: RepositoryDetailService) => {
    expect(service).toBeTruthy();
  }));
});
