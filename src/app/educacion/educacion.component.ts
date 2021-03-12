import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  banner_data: any = {};
  titulo_data: any = {};
  texto_data: any = {};
  seccion2_data:any[] = [];
  texto_final_data:any = {};


  constructor(private httpClient:HttpClient, private _educacioncontinua:PagesService) { }

  ngOnInit(): void {
    this._educacioncontinua.getEducacionContinuaFundacion()
      .subscribe((res:any) => {
        this.banner_data = res.acf.banner_principal;
        this.titulo_data = res.acf.titulo_general;
        this.texto_data = res.acf.texto_general;
        this.seccion2_data = res.acf.seccion_2;
        this.texto_final_data = res.acf.texto_final;
      });
  }
  
}
