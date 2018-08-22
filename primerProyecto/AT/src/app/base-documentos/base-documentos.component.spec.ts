import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDocumentosComponent } from './base-documentos.component';

describe('BaseDocumentosComponent', () => {
  let component: BaseDocumentosComponent;
  let fixture: ComponentFixture<BaseDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
