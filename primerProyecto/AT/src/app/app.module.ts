import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import {RUTAS_APP} from "./app-routes";
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { GuiasComponent } from './guias/guias.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { HomeComponent } from './home/home.component';
import { PaginaGuiasComponent } from './pagina-guias/pagina-guias.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { CreaDocumentoPrincipalComponent } from './crea-documento-principal/crea-documento-principal.component';
import { PreguntaAbogadoPrincipalComponent } from './pregunta-abogado-principal/pregunta-abogado-principal.component';
import { CardNoBotonComponent } from './card-no-boton/card-no-boton.component';
import { PreguntaAbogadoEnviarComponent } from './pregunta-abogado-enviar/pregunta-abogado-enviar.component';
import { BaseDocumentosComponent } from './base-documentos/base-documentos.component';
import { TituloGuiasComponent } from './titulo-guias/titulo-guias.component';
import { GuiasEspecificacionComponent } from './guias-especificacion/guias-especificacion.component';
import { CarouselTituloComponent } from './carousel-titulo/carousel-titulo.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { DocumentoComponent } from './documento/documento.component';
import { PreguntasDocumentoComponent } from './preguntas-documento/preguntas-documento.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CarouselComponent,
    CardsComponent,
    FooterComponent,
    GuiasComponent,
    ConsultasComponent,
    HomeComponent,
    PaginaGuiasComponent,
    InicioSesionComponent,
    RegistrarComponent,
    CreaDocumentoPrincipalComponent,
    PreguntaAbogadoPrincipalComponent,
    CardNoBotonComponent,
    PreguntaAbogadoEnviarComponent,
    BaseDocumentosComponent,
    TituloGuiasComponent,
    GuiasEspecificacionComponent,
    CarouselTituloComponent,
    SobreNosotrosComponent,
    DocumentoComponent,
    PreguntasDocumentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
