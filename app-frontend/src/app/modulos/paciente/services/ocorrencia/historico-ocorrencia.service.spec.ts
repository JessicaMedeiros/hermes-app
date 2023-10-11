import { TestBed } from '@angular/core/testing';

import { HistoricoOcorrenciaService } from './historico-ocorrencia.service';

describe('HistoricoOcorrenciaService', () => {
  let service: HistoricoOcorrenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoOcorrenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
