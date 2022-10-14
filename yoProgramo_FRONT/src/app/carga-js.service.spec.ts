import { TestBed } from '@angular/core/testing';

import { CargaJsService } from './carga-js.service';

describe('CargaJsService', () => {
  let service: CargaJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
