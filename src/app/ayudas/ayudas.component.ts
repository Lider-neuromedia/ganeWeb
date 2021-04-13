import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-ayudas',
  templateUrl: './ayudas.component.html',
  styleUrls: ['./ayudas.component.css']
})
export class AyudasComponent implements OnInit {
  titulo_data:any = {};
  texto_data:any = {};
  loader = true;

  constructor(private httpClient:HttpClient, private _ayudassociales:PagesService) { }

  ngOnInit(): void {
    this._ayudassociales.getAyudasSociales()
      .subscribe((res:any) => {
        this.loader = false;
        this.titulo_data = res.acf.titulo_general;
        this.texto_data = res.acf.texto_general;
      });
  }

}
