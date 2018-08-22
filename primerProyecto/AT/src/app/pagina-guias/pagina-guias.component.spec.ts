import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGuiasComponent } from './pagina-guias.component';

describe('PaginaGuiasComponent', () => {
  let component: PaginaGuiasComponent;
  let fixture: ComponentFixture<PaginaGuiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaGuiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGuiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
