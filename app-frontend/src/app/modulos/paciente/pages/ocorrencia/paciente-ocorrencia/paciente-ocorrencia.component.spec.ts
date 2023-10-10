import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteOcorrenciaComponent } from './paciente-ocorrencia.component';

describe('PacienteOcorrenciaComponent', () => {
  let component: PacienteOcorrenciaComponent;
  let fixture: ComponentFixture<PacienteOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
