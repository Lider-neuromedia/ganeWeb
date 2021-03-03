import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GirosService } from './../services/giros.service';

@Component({
  selector: 'app-calculatugiro',
  templateUrl: './calculatugiro.component.html',
  styleUrls: ['./calculatugiro.component.css']
})
export class CalculatugiroComponent implements OnInit {

  montoSelected:any = "";
  valores_calcular_data:any = [];


  public dropDownValue = "";
    SetDropDownValue(drpValue : any) {
    this.dropDownValue = drpValue.target.value;
  }

  constructor(private httpClient:HttpClient, private _girosservice:GirosService) { }

    ngOnInit(): void {
      this._girosservice.getGiros()
      .subscribe((res:any) => {
        this.valores_calcular_data = res.acf.seccion_1.calcula_tu_giro;
    });
  }
}
