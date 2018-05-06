import { TestBed, inject } from '@angular/core/testing';

import { HomeHttpService } from './home-http.service';

describe('HomeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeHttpService]
    });
  });

  it('should be created', inject([HomeHttpService], (service: HomeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
