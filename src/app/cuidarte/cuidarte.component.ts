import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-cuidarte',
  templateUrl: './cuidarte.component.html',
  styleUrls: ['./cuidarte.component.css']
})
export class CuidarteComponent implements OnInit {
  titulo_principal_data: any = {};
  texto_principal_data: any = {};
  titulo_complementario_data: any = {};
  texto_complementario_data: any = {};
  texto_final_data: any = {};
  tabla_data:any = {};
  datos_tabla_items_data: any[] = [];

  constructor(private httpClient:HttpClient, private _cuidarte:PagesService) { }

  ngOnInit(): void {
    this._cuidarte.getCuidarte()
      .subscribe((res:any) => {
        this.titulo_principal_data = res.acf.titulo_principal;
        this.texto_principal_data = res.acf.texto_principal;
        this.titulo_complementario_data = res.acf.titulo_complementario;
        this.texto_complementario_data = res.acf.texto_complementario;
        this.texto_final_data = res.acf.texto_final;
        this.tabla_data = res.acf.tabla_datos;
        this.datos_tabla_items_data = res.acf.datos_items;
        
      });
  }

}
