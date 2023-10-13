import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarBemEstarComponent } from './gerenciar-bem-estar.component';

describe('GerenciarBemEstarComponent', () => {
  let component: GerenciarBemEstarComponent;
  let fixture: ComponentFixture<GerenciarBemEstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarBemEstarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarBemEstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
