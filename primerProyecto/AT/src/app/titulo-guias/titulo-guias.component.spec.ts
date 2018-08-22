import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloGuiasComponent } from './titulo-guias.component';

describe('TituloGuiasComponent', () => {
  let component: TituloGuiasComponent;
  let fixture: ComponentFixture<TituloGuiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloGuiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
