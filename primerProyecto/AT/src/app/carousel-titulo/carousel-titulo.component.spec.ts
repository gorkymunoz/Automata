import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTituloComponent } from './carousel-titulo.component';

describe('CarouselTituloComponent', () => {
  let component: CarouselTituloComponent;
  let fixture: ComponentFixture<CarouselTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
