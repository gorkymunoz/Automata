import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ConsultasComponent} from "./consultas/consultas.component";
import {HomeComponent} from "./home/home.component";
import {PaginaGuiasComponent} from "./pagina-guias/pagina-guias.component";
import {InicioSesionComponent} from "./inicio-sesion/inicio-sesion.component";
import {RegistrarComponent} from "./registrar/registrar.component";
import {PreguntaAbogadoPrincipalComponent} from "./pregunta-abogado-principal/pregunta-abogado-principal.component";
import {PreguntaAbogadoEnviarComponent} from "./pregunta-abogado-enviar/pregunta-abogado-enviar.component";
import {CreaDocumentoPrincipalComponent} from "./crea-documento-principal/crea-documento-principal.component";
import {GuiasEspecificacionComponent} from "./guias-especificacion/guias-especificacion.component";

export const RUTAS_APP: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'inicioSesion',
    component: InicioSesionComponent,
  },
  {
    path: 'registro',
    component: RegistrarComponent,
  },
  {
    path: 'prueba',
    component: ConsultasComponent,

  },
  {
    path: 'preguntaAbogado',
    component: PreguntaAbogadoPrincipalComponent,
  },
  {
    path: 'preguntaAbogadoEnviar',
    component: PreguntaAbogadoEnviarComponent
  },
  {
    path: 'recibe-asesoramiento',
    component:PaginaGuiasComponent,
  },
  {
    path: 'creaDocumentos',
    component:CreaDocumentoPrincipalComponent,
  },
  {
    path: 'guia-especificaciones',
    component: GuiasEspecificacionComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }


];
