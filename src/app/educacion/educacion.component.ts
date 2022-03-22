import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  banner_data: any;
  titulo_data: any = {};
  texto_data: any = {};
  seccion2_data: any[] = [];
  texto_final_data: any = {};

  loader = true;

  constructor(
    private httpClient: HttpClient,
    private _educacioncontinua: PagesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this._educacioncontinua
      .getEducacionContinuaFundacion()
      .subscribe((res: any) => {
        this.loader = false;
        this.banner_data = res.acf.banner_principal;
        this.titulo_data = res.acf.titulo_general;
        this.texto_data = res.acf.texto_general;
        this.seccion2_data = res.acf.seccion_2;
        this.texto_final_data = res.acf.texto_final;
      });
  }
}
