import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteSidebarComponent } from './paciente-sidebar.component';

describe('PacienteSidebarComponent', () => {
  let component: PacienteSidebarComponent;
  let fixture: ComponentFixture<PacienteSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
