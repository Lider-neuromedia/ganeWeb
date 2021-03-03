import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BetplayService } from './../services/betplay.service';

@Component({
  selector: 'app-betplay',
  templateUrl: './betplay.component.html',
  styleUrls: ['./betplay.component.css']
})
export class BetplayComponent implements OnInit {
  seccion_1_data:any = {};
  seccion_2_data:any = {};
  seccion_3_data:any = {};
  seccion_tabla_data:any[] = [];

  constructor(private httpClient:HttpClient, private _betplayservice:BetplayService) { }

  ngOnInit(): void {

    this._betplayservice.getBetplay()
    .subscribe((res:any) => {
      this.seccion_1_data = res.acf.seccion_1;
      this.seccion_2_data = res.acf.seccion_2_img;
      this.seccion_3_data = res.acf.seccion_3;
      this.seccion_tabla_data = res.acf.seccion_tabla;
    });
    
  }

}
