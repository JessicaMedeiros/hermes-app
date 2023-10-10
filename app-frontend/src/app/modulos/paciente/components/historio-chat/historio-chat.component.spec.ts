import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorioChatComponent } from './historio-chat.component';

describe('HistorioChatComponent', () => {
  let component: HistorioChatComponent;
  let fixture: ComponentFixture<HistorioChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorioChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorioChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
