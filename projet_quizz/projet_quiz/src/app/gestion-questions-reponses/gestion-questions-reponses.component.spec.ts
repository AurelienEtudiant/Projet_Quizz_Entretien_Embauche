import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionQuestionsReponsesComponent } from './gestion-questions-reponses.component';

describe('GestionQuestionsReponsesComponent', () => {
  let component: GestionQuestionsReponsesComponent;
  let fixture: ComponentFixture<GestionQuestionsReponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionQuestionsReponsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionQuestionsReponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

