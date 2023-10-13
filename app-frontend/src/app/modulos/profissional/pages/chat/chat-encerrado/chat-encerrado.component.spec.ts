import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEncerradoComponent } from './chat-encerrado.component';

describe('ChatEncerradoComponent', () => {
  let component: ChatEncerradoComponent;
  let fixture: ComponentFixture<ChatEncerradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatEncerradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatEncerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
