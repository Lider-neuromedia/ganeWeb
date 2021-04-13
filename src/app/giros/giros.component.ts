import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PagesService } from './../services/pages.service';

@Component({
  selector: 'app-giros',
  templateUrl: './giros.component.html',
  styleUrls: ['./giros.component.css']
})
export class GirosComponent implements OnInit {
  seccion1_supergiros_data:any={};
  seccion2_datostabla:any[] = [];
  seccion3_supergiros_data:any={};
  banderas_seccion_data:any[] = [];

  montoSelected:any = "";

  loader = true;
  totalCount = 1;

  constructor(private httpClient:HttpClient, private _girosservice:PagesService) { }

  ngOnInit(): void {
    this._girosservice.getGiros()
    .subscribe((res:any) => {
      this.loader = false;
      this.seccion1_supergiros_data = res.acf.seccion_1;
      this.seccion2_datostabla = res.acf.seccion_2;
      this.seccion3_supergiros_data = res.acf.seccion_3;
      this.banderas_seccion_data = res.acf.banderas_seccion3;
    });
  }

}

