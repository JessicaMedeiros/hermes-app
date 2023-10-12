import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalSidebarComponent } from './profissional-sidebar.component';

describe('ProfissionalSidebarComponent', () => {
  let component: ProfissionalSidebarComponent;
  let fixture: ComponentFixture<ProfissionalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
