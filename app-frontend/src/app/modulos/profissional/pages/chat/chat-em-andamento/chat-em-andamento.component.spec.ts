import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEmAndamentoComponent } from './chat-em-andamento.component';

describe('ChatEmAndamentoComponent', () => {
  let component: ChatEmAndamentoComponent;
  let fixture: ComponentFixture<ChatEmAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatEmAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
