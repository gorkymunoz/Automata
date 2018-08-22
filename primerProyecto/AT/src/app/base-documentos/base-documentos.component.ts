import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-base-documentos',
  templateUrl: './base-documentos.component.html',
  styleUrls: ['./base-documentos.component.css']
})
export class BaseDocumentosComponent implements OnInit {

  arFamilia = [
    {
      descripcion: 'La convivencia y el matrimonio',

        tituloVin: 'El convenio en la regulación matrimonial',
        descripcionVin: 'Acuerda las soluciones a los posibles problemas de tu convivencia'
    },
    {
      descripcion: 'La separación y el divorcio',
      arVinculo: {
        tituloVin: 'El convenio en la regulación matrimonial',
        descripcionVin: 'Acuerda las soluciones a los posibles problemas de tu convivencia'
      }
    },
    {
      descripcion: 'El testamento y la herencia',
      arVinculo: {
        tituloVin: 'El convenio en la regulación matrimonial',
        descripcionVin: 'Acuerda las soluciones a los posibles problemas de tu convivencia'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
