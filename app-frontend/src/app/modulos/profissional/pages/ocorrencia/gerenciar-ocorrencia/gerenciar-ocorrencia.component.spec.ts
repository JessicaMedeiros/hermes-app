import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarOcorrenciaComponent } from './gerenciar-ocorrencia.component';

describe('GerenciarOcorrenciaComponent', () => {
  let component: GerenciarOcorrenciaComponent;
  let fixture: ComponentFixture<GerenciarOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
