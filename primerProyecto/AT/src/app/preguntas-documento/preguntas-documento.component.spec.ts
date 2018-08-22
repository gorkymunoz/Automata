import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasDocumentoComponent } from './preguntas-documento.component';

describe('PreguntasDocumentoComponent', () => {
  let component: PreguntasDocumentoComponent;
  let fixture: ComponentFixture<PreguntasDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
