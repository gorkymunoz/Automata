import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-titulo-guias',
  templateUrl: './titulo-guias.component.html',
  styleUrls: ['./titulo-guias.component.css']
})
export class TituloGuiasComponent implements OnInit {

  @Input() resultadotg: any = [];

  constructor() {

    console.log(this.resultadotg);
  }

  ngOnInit() {
  }

}
