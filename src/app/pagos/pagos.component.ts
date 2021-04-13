import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  titulo_convenios_data: any = {};
  convenios_logos_data: any[] =[];
  titulo_principal_data:any = {};
  texto_principal_data:any = {};
  tarjeta_convenio_data:any[] = [];
  tabla_convenio_popup_data:any[] = [];

  loader = true;
  totalCount = 1;
  totalCountPagos = 4;
  
  constructor(private httpClient:HttpClient, private _pagosservice:PagesService) { }

  ngOnInit(): void {
    this._pagosservice.getPagos()
    .subscribe((res:any) => {
      this.loader = false;
      this.titulo_principal_data = res.acf.titulo_pagina;
      this.titulo_convenios_data = res.acf.titulo_convenios;
      this.convenios_logos_data = res.acf.convenios_pago;
      this.texto_principal_data = res.acf.texto_principal_pagina;
      this.tarjeta_convenio_data = res.acf.tarjeta_convenio; 
      this.tabla_convenio_popup_data = res.acf.tarjeta_convenio.popup_tarjeta;
    });
  }


}
