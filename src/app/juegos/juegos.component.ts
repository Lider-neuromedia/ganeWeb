import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  item_tab_data: any[] = [];
  info_tabla_de_2_campos: any[] = [];
  info_cobros: any = {}; 
  public activePillIndex:number = 0;

  constructor(private httpClient:HttpClient, private _juegosservice:PagesService) { }

  ngOnInit(): void {
      this._juegosservice.getJuegos()
      .subscribe((res:any) => {
        this.item_tab_data          = res.acf.item_tab;
        this.info_tabla_de_2_campos = res.acf.item_tab.tabla_de_2_campos;
        this.info_cobros            = res.acf.item_tab.seccion_cobros;
      });
  }

  public selectPill(index:number) {
    this.activePillIndex = index;
    // do some other stuff if necessary...
   }
  
}
