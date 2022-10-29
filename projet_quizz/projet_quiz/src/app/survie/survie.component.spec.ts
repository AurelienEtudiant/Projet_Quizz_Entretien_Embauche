import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvieComponent } from './survie.component';

describe('SurvieComponent', () => {
  let component: SurvieComponent;
  let fixture: ComponentFixture<SurvieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
