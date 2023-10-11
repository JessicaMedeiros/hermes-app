import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteEducativoComponent } from './paciente-educativo.component';

describe('PacienteEducativoComponent', () => {
  let component: PacienteEducativoComponent;
  let fixture: ComponentFixture<PacienteEducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteEducativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
