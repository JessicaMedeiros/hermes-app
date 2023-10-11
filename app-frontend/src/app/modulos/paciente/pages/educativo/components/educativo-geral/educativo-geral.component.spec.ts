import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativoGeralComponent } from './educativo-geral.component';

describe('EducativoGeralComponent', () => {
  let component: EducativoGeralComponent;
  let fixture: ComponentFixture<EducativoGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducativoGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducativoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
