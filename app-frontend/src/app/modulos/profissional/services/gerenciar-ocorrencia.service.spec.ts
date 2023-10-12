import { TestBed } from '@angular/core/testing';

import { GerenciarOcorrenciaService } from './gerenciar-ocorrencia.service';

describe('GerenciarOcorrenciaService', () => {
  let service: GerenciarOcorrenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciarOcorrenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
