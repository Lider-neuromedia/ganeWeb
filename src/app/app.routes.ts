import { RouterModule, Routes } from '@angular/router';

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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '', component: InicioComponent},
    {path: 'giros', component: GirosComponent},
    {path: 'betplay', component: BetplayComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'juegos', component: JuegosComponent},
    {path: 'pagos', component: PagosComponent},
    {path: 'comunicados', component: ComunicadosComponent},
    {path: 'periodico', component: PeriodicoComponent},
    {path: 'privacidad', component: PrivacidadComponent},
    {path: 'financieros', component: FinancierosComponent},
    {path: 'recargas', component: RecargasComponent},
    {path: 'soat', component: SoatComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
    useHash: true,
    onSameUrlNavigation: "ignore",
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
});

