/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepositoriesListService } from './repositories-list.service';

describe('Service: RepositoriesList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoriesListService]
    });
  });

  it('should ...', inject([RepositoriesListService], (service: RepositoriesListService) => {
    expect(service).toBeTruthy();
  }));
});
