import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  arregloDatos = [
    {url:'assets/doc.png',
      inf:'Documento',
      titulo:'Crea tus documentos legales',
      texto: 'Documentos legales habituales para tu negocio y familia',
      vinculo:'/creaDocumentos',
      boton: 'Crea documentos'},
    {url:'assets/usuarios.png',
      inf:'Ayuda',
      titulo:'Recibe asesoramiento legal',
      texto: 'Contacta con un abogado cualificado para responder tus preguntas',
      vinculo:'/preguntaAbogado',
      boton: 'Pregunta a un abogado'},
    {url:'assets/como.png',
      inf:'Pregunta',
      titulo:'Encuentra lo que necesitas',
      texto: 'Te ayudamos a orientarte legalmente con nuestras guías gratuitas',
      vinculo:'/recibe-asesoramiento',
      boton: 'Obtén orientación'}
    ]

  constructor() { }

  ngOnInit() {
  }

}
