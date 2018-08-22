import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arPrincipal1=[
    {
      titulo:'Asuntos entre trabajador y empresa',
      descripcion:'Ejerce y defiende tus derechos laborales, comunica tus decisiones a tu empresa'
    },
    {
      titulo:'Contratación de empleados',
      descripcion:'Aprende cómo contratar a tus empleados'
    },
    {
      titulo:'Arrendamiento de vivienda',
      descripcion:'Alquila tu casa'
    }
  ]
  arPrincipal2=[
    {
      titulo:'Contratos mercantiles',
      descripcion:'Vende productos y marcas. Contrata a un agente o distribuidor. Firma contratos de confidencialidad'
    },
    {
      titulo:'Asociaciones y fundaciones',
      descripcion:'Crea un entidad sin la intención de obtener un beneficio económico'
    },
    {
      titulo:'Cartas y reclamaciones para consumidores',
      descripcion:'Reclama y defiende tus intereses como consumidor'
    }
  ]
  arreglo1 = [
    {
      titulo:'Asesoria',
      descripcion:'asesoria legal'
    }
  ]
  arreglo2 = [
    {
      titulo:'Divorcio',
      descripcion:'realiza divorcios'
    }

  ]
}
