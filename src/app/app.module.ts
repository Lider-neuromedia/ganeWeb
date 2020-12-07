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
    CampanasComponent
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
