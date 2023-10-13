import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarVideosComponent } from './gerenciar-videos.component';

describe('GerenciarVideosComponent', () => {
  let component: GerenciarVideosComponent;
  let fixture: ComponentFixture<GerenciarVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
