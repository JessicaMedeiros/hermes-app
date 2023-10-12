import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalNavbarComponent } from './profissional-navbar.component';

describe('ProfissionalNavbarComponent', () => {
  let component: ProfissionalNavbarComponent;
  let fixture: ComponentFixture<ProfissionalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfissionalNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
