import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoChatComponent } from './novo-chat.component';

describe('NovoChatComponent', () => {
  let component: NovoChatComponent;
  let fixture: ComponentFixture<NovoChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
