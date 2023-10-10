import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarOcorrenciaComponent } from './criar-ocorrencia.component';

describe('CriarOcorrenciaComponent', () => {
  let component: CriarOcorrenciaComponent;
  let fixture: ComponentFixture<CriarOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
