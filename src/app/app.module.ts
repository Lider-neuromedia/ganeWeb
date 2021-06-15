import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';
import { HomeService } from './services/home.service';
import { CampanaService } from './services/campana.service'; 
import { ArticlesService } from './services/articles.service';
import { PagesService } from './services/pages.service';
import { PostsService } from './services/posts.service';
import { MapsService } from './services/maps.service';

// Lenguaje
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { GirosComponent } from './giros/giros.component';
import { BetplayComponent } from './betplay/betplay.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PagosComponent } from './pagos/pagos.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { PeriodicoComponent } from './periodico/periodico.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { FinancierosComponent } from './financieros/financieros.component';
import { RecargasComponent } from './recargas/recargas.component';
import { SoatComponent } from './soat/soat.component';
import { CampanasComponent } from './campanas/campanas.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { BlogComponent } from './blog/blog.component';
import { GestionCalidadComponent } from './gestion-calidad/gestion-calidad.component';
import { PagoPremiosComponent } from './pago-premios/pago-premios.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { AmericaCaliComponent } from './america-cali/america-cali.component';
import { AyudasComponent } from './ayudas/ayudas.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SaludComponent } from './salud/salud.component';
import { ViviendaComponent } from './vivienda/vivienda.component';
import { CulturaComponent } from './cultura/cultura.component';
import { PrimeraInfanciaComponent } from './primera-infancia/primera-infancia.component';
import { CuidarteComponent } from './cuidarte/cuidarte.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { PoliticasFeganeComponent } from './politicas-fegane/politicas-fegane.component';
import { FundacionSocialComponent } from './fundacion-social/fundacion-social.component';
import { CulturaAnticorrupcionComponent } from './cultura-anticorrupcion/cultura-anticorrupcion.component';
import { LineaEticaComponent } from './linea-etica/linea-etica.component';
import { CulturaAntilavadoComponent } from './cultura-antilavado/cultura-antilavado.component';
import { PuntosVentaComponent } from './puntos-venta/puntos-venta.component';
import { ComunicadoInternaComponent } from './comunicado-interna/comunicado-interna.component';
import { BlogInternaComponent } from './blog-interna/blog-interna.component';
import { PrevenirComponent } from './prevenir/prevenir.component';
import { ImportanteComponent } from './importante/importante.component';
import { CulturaTransparenciaComponent } from './cultura-transparencia/cultura-transparencia.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { CampanaComponent } from './campana/campana.component';
import { CalculatugiroComponent } from './calculatugiro/calculatugiro.component';
import { Error404Component } from './error404/error404.component';
import { RuletaComponent } from './ruleta/ruleta.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { NgSelect2Module } from 'ng-select2';
import { ResultadosComponent } from './resultados/resultados.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    GirosComponent,
    BetplayComponent,
    QuienesSomosComponent,
    JuegosComponent,
    PagosComponent,
    ComunicadosComponent,
    PeriodicoComponent,
    PrivacidadComponent,
    FinancierosComponent,
    RecargasComponent,
    SoatComponent,
    CampanasComponent,
    ContactenosComponent,
    BlogComponent,
    GestionCalidadComponent,
    PagoPremiosComponent,
    PreguntasComponent,
    AmericaCaliComponent,
    AyudasComponent,
    PoliticasComponent,
    EducacionComponent,
    SaludComponent,
    ViviendaComponent,
    CulturaComponent,
    PrimeraInfanciaComponent,
    CuidarteComponent,
    EscuelaComponent,
    PoliticasFeganeComponent,
    FundacionSocialComponent,
    CulturaAnticorrupcionComponent,
    LineaEticaComponent,
    CulturaAntilavadoComponent,
    PuntosVentaComponent,
    ComunicadoInternaComponent,
    BlogInternaComponent,
    PrevenirComponent,
    ImportanteComponent,
    CulturaTransparenciaComponent,
    RestauranteComponent,
    CampanaComponent,
    CalculatugiroComponent,
    Error404Component,
    RuletaComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgSelect2Module,
    CarouselModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [
    { 
      provide: LOCALE_ID, 
      useValue: 'es',
    },
    // {
    //   provide: HTTP_INTERCEPTORS, 
    //   useClass: InterceptorService,
    //   multi: true
    // },
    ArticlesService,
    CampanaService,
    HomeService,
    PagesService,
    PostsService,
    MapsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
