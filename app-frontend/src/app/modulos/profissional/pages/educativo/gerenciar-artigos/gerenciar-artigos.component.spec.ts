import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarArtigosComponent } from './gerenciar-artigos.component';

describe('GerenciarArtigosComponent', () => {
  let component: GerenciarArtigosComponent;
  let fixture: ComponentFixture<GerenciarArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarArtigosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
