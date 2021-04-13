import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.css']
})
export class ViviendaComponent implements OnInit {
  banner_data: any;
  titulo_data: any = {};
  texto1_data: any = {};
  texto_con_titulo_data: any[] = [];
  texto_final_data: any = {};

  loader = true;

  constructor(private httpClient:HttpClient, private _vivienda:PagesService) { }

  ngOnInit(): void {
    this._vivienda.getVivienda()
      .subscribe((res:any) => {
        this.loader = false;
        this.banner_data = res.acf.banner;
        this.titulo_data = res.acf.titulo;
        this.texto1_data = res.acf.texto1;
        this.texto_con_titulo_data = res.acf.texto_con_titulo;
        this.texto_final_data = res.acf.texto_final;
        
      });
  }

}
