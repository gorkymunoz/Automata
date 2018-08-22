import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guias-especificacion',
  templateUrl: './guias-especificacion.component.html',
  styleUrls: ['./guias-especificacion.component.css']
})
export class GuiasEspecificacionComponent implements OnInit {

  arAsociaciones = [
    {
      titulo:'Asociaciones y fundaciones',
  }

  ]
  constructor() { }

  ngOnInit() {
  }

}
