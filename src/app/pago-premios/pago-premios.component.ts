import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-pago-premios',
  templateUrl: './pago-premios.component.html',
  styleUrls: ['./pago-premios.component.css']
})
export class PagoPremiosComponent implements OnInit {
  titulo_data:any = {};
  texto_descriptivo_principal_data:any = {};
  imagen_principal_data:any;
  columna_izquierda_data: any = {};
  columna_derecha_data: any = {};
  titulo_final_data: any = {};
  texto_final_data: any = {};

  constructor(private httpClient:HttpClient, private _pagopremios:PagesService) { }

  ngOnInit(): void {
    this._pagopremios.getPagoPremios()
      .subscribe((res:any) => {
        this.titulo_data = res.acf.titulo_principal;
        this.texto_descriptivo_principal_data = res.acf.texto_descriptivo_principal;
        this.imagen_principal_data = res.acf.imagen_principal;
        this.columna_izquierda_data = res.acf.columna_izquierda;
        this.columna_derecha_data = res.acf.columna_derecha;
        this.titulo_final_data = res.acf.titulo_final;
        this.texto_final_data = res.acf.texto_final;
      });
  }

}
