import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crea-documento-principal',
  templateUrl: './crea-documento-principal.component.html',
  styleUrls: ['./crea-documento-principal.component.css']
})
export class CreaDocumentoPrincipalComponent implements OnInit {

  constructor() { }

  resultado: string[]=[];

  receiveMessage($event) {
    this.resultado = $event
  }

  ngOnInit() {

    console.log(this.resultado)
  }

}
