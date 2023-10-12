import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoBemEstarComponent } from './notificacao-bem-estar.component';

describe('NotificacaoBemEstarComponent', () => {
  let component: NotificacaoBemEstarComponent;
  let fixture: ComponentFixture<NotificacaoBemEstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoBemEstarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacaoBemEstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
