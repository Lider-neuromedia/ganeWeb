import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { GirosComponent } from './giros/giros.component';
import { BetplayComponent } from './betplay/betplay.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PagosComponent } from './pagos/pagos.component';
import { ComunicadosComponent } from './comunicados/comunicados.component';
import { ComunicadoInternaComponent } from './comunicado-interna/comunicado-interna.component';
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
import { BlogInternaComponent } from './blog-interna/blog-interna.component';
import { PrevenirComponent } from './prevenir/prevenir.component';
import { ImportanteComponent } from './importante/importante.component';
import { CulturaTransparenciaComponent } from './cultura-transparencia/cultura-transparencia.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { CampanaComponent } from './campana/campana.component';
import { Error404Component } from './error404/error404.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ResultadosComponent } from './resultados/resultados.component';

const APP_ROUTES: Routes = [
    {path: '', component: InicioComponent},
    {path: 'giros', component: GirosComponent},
    {path: 'betplay', component: BetplayComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'juegos', component: JuegosComponent},
    {path: 'pagos', component: PagosComponent},
    {path: 'comunicados', component: ComunicadosComponent},
    {path: 'comunicado/:slug', component: ComunicadoInternaComponent},
    {path: 'periodico', component: PeriodicoComponent},
    {path: 'privacidad', component: PrivacidadComponent},
    {path: 'financieros', component: FinancierosComponent},
    {path: 'recargas', component: RecargasComponent},
    {path: 'soat', component: SoatComponent},
    {path: 'campanas', component: CampanasComponent},
    {path: 'campana/:slug', component: CampanaComponent},
    {path: 'contactenos', component: ContactenosComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'articulo/:slug', component: BlogInternaComponent},
    {path: 'gestion', component: GestionCalidadComponent},
    {path: 'pago-premios', component: PagoPremiosComponent},
    {path: 'preguntas', component: PreguntasComponent},
    {path: 'america-cali', component: AmericaCaliComponent},
    {path: 'ayudas', component: AyudasComponent},
    {path: 'politicas', component: PoliticasComponent},
    {path: 'educacion', component: EducacionComponent},
    {path: 'salud', component: SaludComponent},
    {path: 'vivienda', component: ViviendaComponent},
    {path: 'cultura', component: CulturaComponent},
    {path: 'primera-infancia', component: PrimeraInfanciaComponent},
    {path: 'cuidarte', component: CuidarteComponent},
    {path: 'escuela', component: EscuelaComponent},
    {path: 'politicas-fegane', component: PoliticasFeganeComponent},
    {path: 'fundacion-social', component: FundacionSocialComponent},
    {path: 'cultura-anticorrupcion', component: CulturaAnticorrupcionComponent},
    {path: 'cultura-antilavado', component: CulturaAntilavadoComponent},
    {path: 'linea-etica', component: LineaEticaComponent},
    {path: 'puntos-venta', component: PuntosVentaComponent},
    {path: 'prevenir', component: PrevenirComponent},
    {path: 'importante', component: ImportanteComponent},
    {path: 'cultura-transparencia', component: CulturaTransparenciaComponent},
    {path: 'restaurante', component: RestauranteComponent},
    // {path: 'error', component: Error404Component},
    // {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
    {path: '**', pathMatch: 'full', component: Error404Component}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
    useHash: true,
    onSameUrlNavigation: "ignore",
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
});

