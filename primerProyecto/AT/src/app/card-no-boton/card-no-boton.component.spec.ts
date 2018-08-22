import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoBotonComponent } from './card-no-boton.component';

describe('CardNoBotonComponent', () => {
  let component: CardNoBotonComponent;
  let fixture: ComponentFixture<CardNoBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNoBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
