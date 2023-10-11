import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoChatComponent } from './historico-chat.component';

describe('HistoricoChatComponent', () => {
  let component: HistoricoChatComponent;
  let fixture: ComponentFixture<HistoricoChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
