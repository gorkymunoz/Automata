import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-titulo',
  templateUrl: './carousel-titulo.component.html',
  styleUrls: ['./carousel-titulo.component.css']
})
export class CarouselTituloComponent implements OnInit {

  @Input() resultado:any;

  constructor() { }

  ngOnInit() {
  }

}
