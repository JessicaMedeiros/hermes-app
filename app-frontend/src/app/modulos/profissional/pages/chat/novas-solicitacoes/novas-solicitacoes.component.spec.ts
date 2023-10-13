import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasSolicitacoesComponent } from './novas-solicitacoes.component';

describe('NovasSolicitacoesComponent', () => {
  let component: NovasSolicitacoesComponent;
  let fixture: ComponentFixture<NovasSolicitacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovasSolicitacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovasSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
