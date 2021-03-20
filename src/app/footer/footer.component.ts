import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  estados_financieros_data: any = {};
  estados_financieros_texto_data: any = {};
  informe_anual_2019_data: any = {};
  informe_anual_2019_texto_data: any = {};
  datos_generales_data: any = {};
  datos_generales_texto_data: any = {};
  informe_del_revisor_fiscal_data: any = {};
  informe_del_revisor_fiscal_texto_data: any = {};

  grupo_datos_data: any[] = [];
  texto_ciudad_data:any = {};
  texto_boton_data:any = {};
  titulo_redes_data: any= {};
  repetidor_de_redes_data: any[] = [];


  constructor(private httpClient:HttpClient, private _informesfundacion:PagesService, private _generalfooter:PagesService) { }

  ngOnInit(): void {
    this._informesfundacion.getInformesFundacion()
      .subscribe((res:any) => {
        this.estados_financieros_data = res.acf.estados_financieros;
        this.estados_financieros_texto_data = res.acf.estados_financieros_texto;
        this.informe_anual_2019_data = res.acf.informe_anual_2019;
        this.informe_anual_2019_texto_data = res.acf.informe_anual_2019_texto;
        this.datos_generales_data = res.acf.datos_generales;
        this.datos_generales_texto_data = res.acf.datos_generales_texto;
        this.informe_del_revisor_fiscal_data = res.acf.informe_del_revisor_fiscal;
        this.informe_del_revisor_fiscal_texto_data = res.acf.informe_del_revisor_fiscal_texto;
      });
    this._generalfooter.getGeneralFooter()
      .subscribe((res:any) => {
        this.grupo_datos_data = res.acf.grupo_datos;
        this.texto_ciudad_data = res.acf.texto_ciudad;
        this.texto_boton_data = res.acf.texto_boton;
        this.titulo_redes_data = res.acf.titulo_redes;
        this.repetidor_de_redes_data = res.acf.repetidor_de_redes;
      });
  }

}
