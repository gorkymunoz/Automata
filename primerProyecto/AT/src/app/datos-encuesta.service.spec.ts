import { TestBed, inject } from '@angular/core/testing';

import { DatosEncuestaService } from './datosEncuesta.service';

describe('DatosEncuestaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosEncuestaService]
    });
  });

  it('should be created', inject([DatosEncuestaService], (service: DatosEncuestaService) => {
    expect(service).toBeTruthy();
  }));
});
