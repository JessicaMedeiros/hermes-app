import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteChatComponent } from './paciente-chat.component';

describe('PacienteChatComponent', () => {
  let component: PacienteChatComponent;
  let fixture: ComponentFixture<PacienteChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
