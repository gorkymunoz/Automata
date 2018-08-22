import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAbogadoEnviarComponent } from './pregunta-abogado-enviar.component';

describe('PreguntaAbogadoEnviarComponent', () => {
  let component: PreguntaAbogadoEnviarComponent;
  let fixture: ComponentFixture<PreguntaAbogadoEnviarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAbogadoEnviarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAbogadoEnviarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
