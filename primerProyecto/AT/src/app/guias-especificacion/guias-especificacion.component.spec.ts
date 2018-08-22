import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasEspecificacionComponent } from './guias-especificacion.component';

describe('GuiasEspecificacionComponent', () => {
  let component: GuiasEspecificacionComponent;
  let fixture: ComponentFixture<GuiasEspecificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiasEspecificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasEspecificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
