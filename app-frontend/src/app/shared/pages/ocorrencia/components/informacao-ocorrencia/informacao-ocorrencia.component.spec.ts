import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoOcorrenciaComponent } from './informacao-ocorrencia.component';

describe('InformacaoOcorrenciaComponent', () => {
  let component: InformacaoOcorrenciaComponent;
  let fixture: ComponentFixture<InformacaoOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacaoOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
