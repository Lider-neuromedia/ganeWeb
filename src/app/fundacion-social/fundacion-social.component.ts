import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-fundacion-social',
  templateUrl: './fundacion-social.component.html',
  styleUrls: ['./fundacion-social.component.css']
})
export class FundacionSocialComponent implements OnInit {
  titulo: any = {};
  imagen_fondo: any;
  primer_grupo_repeater: any[] = [];
  segundo_grupo_texto_data: any = {};

  loader = true;

  constructor(private httpClient:HttpClient, private _quienessomosfundacionservice:PagesService) { }

  ngOnInit(): void {
    this._quienessomosfundacionservice.getQuienesSomosFundacion()
      .subscribe((res:any) => {
        this.loader = false;
        this.titulo = res.acf.titulo_pagina;
        this.primer_grupo_repeater = res.acf.primer_grupo_texto;
        this.imagen_fondo = res.acf.imagen_fondo_derecha;
        this.segundo_grupo_texto_data = res.acf.segundo_grupo_texto;
      });
  }

}
