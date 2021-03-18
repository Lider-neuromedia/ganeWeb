import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-linea-etica',
  templateUrl: './linea-etica.component.html',
  styleUrls: ['./linea-etica.component.css']
})
export class LineaEticaComponent implements OnInit {
  titulo_data:any = {};
  item_menu_data: any[] = [];
  public activePillIndex:number = 0;

  constructor(private httpClient:HttpClient, private _lineaetica:PagesService) { }

  ngOnInit(): void {
    this._lineaetica.getLineaEtica()
      .subscribe((res:any) => {
        this.titulo_data = res.acf.titulo_principal;
        this.item_menu_data = res.acf.item_menu;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }

}
