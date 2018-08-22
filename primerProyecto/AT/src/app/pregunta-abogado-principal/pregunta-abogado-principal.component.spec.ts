import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAbogadoPrincipalComponent } from './pregunta-abogado-principal.component';

describe('PreguntaAbogadoPrincipalComponent', () => {
  let component: PreguntaAbogadoPrincipalComponent;
  let fixture: ComponentFixture<PreguntaAbogadoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAbogadoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAbogadoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
