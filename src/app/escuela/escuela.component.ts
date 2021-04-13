import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
  styleUrls: ['./escuela.component.css']
})
export class EscuelaComponent implements OnInit {
  titulo_principal_data: any = {};
  texto_general_data: any = {};
  imagen_general_data: any;
  tabla_data: any = {};
  datos_tabla_data:any[] = [];

  loader = true;

  constructor(private httpClient:HttpClient, private _escueladeportiva:PagesService) { }

  ngOnInit(): void {
    this._escueladeportiva.getEscuelaIniciacionDeportiva()
      .subscribe((res:any) => {

        this.loader = false;
        this.titulo_principal_data = res.acf.titulo_general;
        this.texto_general_data = res.acf.texto_general;
        this.imagen_general_data = res.acf.imagen_general;
        this.tabla_data = res.acf.tabla;
        this.datos_tabla_data = res.acf.datos_tabla;

      });
  }

}
