import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
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
    CulturaAntilavadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
