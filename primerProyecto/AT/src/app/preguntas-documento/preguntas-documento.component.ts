import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DatosEncuestaService} from "../datosEncuesta.service";

@Component({
  selector: 'app-preguntas-documento',
  templateUrl: './preguntas-documento.component.html',
  styleUrls: ['./preguntas-documento.component.css']
})
export class PreguntasDocumentoComponent implements OnInit {

  mensaje:any=[];

  constructor(private data: DatosEncuestaService) { }


  ngOnInit() {
    this.data.currentMessage.subscribe(message=> this.mensaje = message)
  }

  enviarDatos(datos){

    this.data.changeMessage(datos)
  }
}
