import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-primera-infancia',
  templateUrl: './primera-infancia.component.html',
  styleUrls: ['./primera-infancia.component.css']
})
export class PrimeraInfanciaComponent implements OnInit {

  banner_data: any;
  titulo_data: any = {};
  texto_general_data: any = {};
  texto_columna_izquierda_data: any = {};
  imagen_columna_derecha_data: any;
  texto_final_data: any = {};

  loader = true;

  constructor(private httpClient:HttpClient, private _salud:PagesService) { }

  ngOnInit(): void {
    this._salud.getPrimeraInfancia()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.titulo_data = res.acf.titulo_principal;
        this.texto_general_data = res.acf.texto_general;
        this.texto_columna_izquierda_data = res.acf.texto_columna_izquierda;
        this.imagen_columna_derecha_data = res.acf.imagen_columna_derecha;
        this.texto_final_data = res.acf.texto_final;
      });
  }

}
