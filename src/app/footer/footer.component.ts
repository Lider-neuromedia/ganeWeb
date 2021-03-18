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

  constructor(private httpClient:HttpClient, private _informesfundacion:PagesService) { }

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
  }

}
