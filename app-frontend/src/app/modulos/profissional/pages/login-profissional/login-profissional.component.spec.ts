import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProfissionalComponent } from './login-profissional.component';

describe('LoginProfissionalComponent', () => {
  let component: LoginProfissionalComponent;
  let fixture: ComponentFixture<LoginProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
