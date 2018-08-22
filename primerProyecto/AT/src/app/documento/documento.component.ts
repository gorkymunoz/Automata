import { Component, OnInit, Input } from '@angular/core';
import {DatosEncuestaService} from "../datosEncuesta.service";

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  message:any;

  constructor(private data: DatosEncuestaService) {
  }


  ngOnInit() {
    this.data.currentMessage.subscribe(message=> this.message = message)
  }

}
