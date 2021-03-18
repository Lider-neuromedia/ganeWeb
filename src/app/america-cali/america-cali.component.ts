import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-america-cali',
  templateUrl: './america-cali.component.html',
  styleUrls: ['./america-cali.component.css']
})
export class AmericaCaliComponent implements OnInit {
  img_principal_data: any;
  tabla_data: any = {};

  constructor(private httpClient:HttpClient, private _americaycali:PagesService) { }

  ngOnInit(): void {
    this._americaycali.getAmericaCali()
      .subscribe((res:any) => {
        this.img_principal_data = res.acf.imagen_principal;
        this.tabla_data = res.acf.tabla;
      });
  }

}
