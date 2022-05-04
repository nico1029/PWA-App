import { TestBed } from '@angular/core/testing';

import { ImmovablesService } from './immovables.service';

describe('ImmovablesService', () => {
  let service: ImmovablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmovablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
