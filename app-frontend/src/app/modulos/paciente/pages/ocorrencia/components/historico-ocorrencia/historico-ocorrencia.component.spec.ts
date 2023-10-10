import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoOcorrenciaComponent } from './historico-ocorrencia.component';

describe('HistoricoOcorrenciaComponent', () => {
  let component: HistoricoOcorrenciaComponent;
  let fixture: ComponentFixture<HistoricoOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
