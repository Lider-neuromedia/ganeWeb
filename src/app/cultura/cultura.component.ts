import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';


@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.css']
})
export class CulturaComponent implements OnInit {
  titulo_data: any = {};
  imagen_derecha_data: any;
  texto_1_data: any = {};
  titulo2_data: any = {};
  texto_2_data: any = {};
  texto_final_data: any = {};

  loader = true;

  constructor(private httpClient:HttpClient, private _recreacion:PagesService) { }

  ngOnInit(): void {
    this._recreacion.getRecreacion()
      .subscribe((res:any) => {
        this.loader = false;
        this.titulo_data = res.acf.titulo;
        this.imagen_derecha_data = res.acf.imagen_derecha;
        this.texto_1_data = res.acf.texto_1;
        this.titulo2_data = res.acf.titulo_2;
        this.texto_2_data = res.acf.texto_2;
        this.texto_final_data = res.acf.texto_final;

      });
  }

}
