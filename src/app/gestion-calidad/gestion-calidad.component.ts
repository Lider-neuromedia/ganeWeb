import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-gestion-calidad',
  templateUrl: './gestion-calidad.component.html',
  styleUrls: ['./gestion-calidad.component.css']
})
export class GestionCalidadComponent implements OnInit {
  titulo_data: any;
  texto_principal_data: any;
  imagen_principal_data: any;

  constructor(private httpClient:HttpClient, private _gestioncalidad:PagesService) { }

  ngOnInit(): void {
    this._gestioncalidad.getSistemaGestionCalidad()
      .subscribe((res:any) => {
        this.titulo_data = res.acf.titulo;
        this.texto_principal_data = res.acf.texto_principal;
        this.imagen_principal_data = res.acf.imagen_principal;
      });
  }

}
