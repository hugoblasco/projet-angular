import { TestBed } from '@angular/core/testing';

import { MediaTypeService } from './media-type.service';

describe('MediaTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaTypeService = TestBed.get(MediaTypeService);
    expect(service).toBeTruthy();
  });
});
