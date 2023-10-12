import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoOcorrenciasComponent } from './notificacao-ocorrencias.component';

describe('NotificacaoOcorrenciasComponent', () => {
  let component: NotificacaoOcorrenciasComponent;
  let fixture: ComponentFixture<NotificacaoOcorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoOcorrenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacaoOcorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
