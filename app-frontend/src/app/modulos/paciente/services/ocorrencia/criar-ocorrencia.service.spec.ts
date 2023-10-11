import { TestBed } from '@angular/core/testing';

import { CriarOcorrenciaService } from './criar-ocorrencia.service';

describe('CriarOcorrenciaService', () => {
  let service: CriarOcorrenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarOcorrenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
