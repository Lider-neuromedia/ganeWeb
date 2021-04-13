import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  titulo_data:any = {};
  texto_general_data: any = {};
  texto_final_data: any = {};

  loader = true;

  constructor(private httpClient:HttpClient, private _restaurante:PagesService) { }

  ngOnInit(): void {
    this._restaurante.getRestaurante()
      .subscribe((res:any) => {
        this.loader = false;
        this.titulo_data = res.acf.titulo;
        this.texto_general_data = res.acf.texto_general;
        this.texto_final_data = res.acf.texto_final;
      });
  }

}
