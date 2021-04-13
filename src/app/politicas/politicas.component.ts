import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {
  seccion1_data : any = {};
  seccion_2_data: any[] = [];

  loader = true;

  constructor(private httpClient:HttpClient, private _politicasfundacion:PagesService) { }

  ngOnInit(): void {
    this._politicasfundacion.getPoliticasFundacion()
      .subscribe((res:any) => {
        this.loader = false;
        this.seccion1_data = res.acf.seccion_1;
        this.seccion_2_data = res.acf.seccion_2_titulo_y_texto;
      });
  }
}
