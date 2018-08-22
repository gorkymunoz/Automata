import { Component, OnInit } from '@angular/core';
import {DatosEncuestaService} from "../datosEncuesta.service";

@Component({
  selector: 'app-pregunta-abogado-principal',
  templateUrl: './pregunta-abogado-principal.component.html',
  styleUrls: ['./pregunta-abogado-principal.component.css']
})
export class PreguntaAbogadoPrincipalComponent implements OnInit {

  arConsultaForm=[
    {
      formulario:'#',
      titulo:'Consigue una respuesta legal',
      desc:'Respuestas sencillas redactas por abogados',
      info:'Escriba su pregunta',
      vinculo: '/preguntaAbogadoEnviar',
      boton:'Pregunta a un abogado'
    }
  ]



  constructor() { }

  ngOnInit() {


  }

}
