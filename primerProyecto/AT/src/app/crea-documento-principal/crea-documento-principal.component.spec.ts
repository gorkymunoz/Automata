import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaDocumentoPrincipalComponent } from './crea-documento-principal.component';

describe('CreaDocumentoPrincipalComponent', () => {
  let component: CreaDocumentoPrincipalComponent;
  let fixture: ComponentFixture<CreaDocumentoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaDocumentoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaDocumentoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
