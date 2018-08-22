import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-guias',
  templateUrl: './pagina-guias.component.html',
  styleUrls: ['./pagina-guias.component.css']
})
export class PaginaGuiasComponent implements OnInit {

  arGuiasPrincipal1 = [
    {
      titulo:'Asociaciones y fundaciones',
      descripcion:'Crea un entidad sin la intención de obtener un beneficio económico',
        vinculo: '/guia-especificaciones'
    },
    {
      titulo:'Contratación de empleados',
      descripcion:'Aprende cómo contratar a tus trabajadores paso a paso'
    },
    {
      titulo:'Asuntos entre trabajador y empresa',
      descripcion:'Ejerce y defiende tus derechos laborales'
    },
    {
      titulo:'Incumplimiento de contrato e impagados',
      descripcion:'Exige el pago de tus deudas y que cumplan lo pactado'
    }

  ]
  arGuiasPrincipal2 = [
    {
      titulo:'Contratos mercantiles',
      descripcion:'Vende productos y marcas. Contrata a un agente o distribuidor. Firma contratos de confidencialidad'
    },
    {
      titulo:'El arrendamiento de vivienda',
      descripcion:'Alquila tu casa'
    },
    {
      titulo:'Cartas y reclamaciones para consumidores',
      descripcion:'Reclama y defiende tus intereses como consumidor'
    },
    {
      titulo:'Negocios online',
      descripcion:'Todo lo que necesitas para vender por internet'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
