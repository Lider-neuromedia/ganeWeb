import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { GirosComponent } from './giros/giros.component';
import { BetplayComponent } from './betplay/betplay.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '', component: InicioComponent},
    {path: 'giros', component: GirosComponent},
    {path: 'betplay', component: BetplayComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
    useHash: true,
    onSameUrlNavigation: "ignore",
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
});

