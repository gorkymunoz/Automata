import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-no-boton',
  templateUrl: './card-no-boton.component.html',
  styleUrls: ['./card-no-boton.component.css']
})
export class CardNoBotonComponent implements OnInit {

  arregloDatos = [
    {url:'assets/doc.png',
      inf:'Documento',
      titulo:'Preguntar',
      texto: 'Realiza una pregunta legal'},
    {url:'assets/usuarios.png',
      inf:'Ayuda',
      titulo:'Obtener respuestas',
      texto: 'Recibe una respuesta de un abogado'},
    {url:'assets/como.png',
      inf:'Pregunta',
      titulo:'Consultar las preguntas',
      texto: 'Busca otros asuntos de tu interés'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
