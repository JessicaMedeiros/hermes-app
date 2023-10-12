import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoChatComponent } from './notificacao-chat.component';

describe('NotificacaoChatComponent', () => {
  let component: NotificacaoChatComponent;
  let fixture: ComponentFixture<NotificacaoChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacaoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
