import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiarioBemEstarComponent } from './diario-bem-estar.component';

describe('DiarioBemEstarComponent', () => {
  let component: DiarioBemEstarComponent;
  let fixture: ComponentFixture<DiarioBemEstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiarioBemEstarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiarioBemEstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
