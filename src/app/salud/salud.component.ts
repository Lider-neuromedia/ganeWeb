import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {
  banner_data: any = {};
  titulo_data: any = {};
  texto_data:any = {};
  seccion2_data:any = {};
  seccion2_tabla1_data:any = {};
  seccion2_tabla2_data:any = {};

  constructor(private httpClient:HttpClient, private _salud:PagesService) { }

  ngOnInit(): void {
    this._salud.getSalud()
      .subscribe((res:any) => {
        this.banner_data = res.acf.banner;
        this.titulo_data = res.acf.titulo;
        this.texto_data = res.acf.texto;
        this.seccion2_data = res.acf.seccion_2_con_tablas;
        this.seccion2_tabla1_data = res.acf.seccion_2_con_tablas.tabla1;
        this.seccion2_tabla2_data = res.acf.seccion_2_con_tablas.tabla2;
      });
  }
  getSalud
}
