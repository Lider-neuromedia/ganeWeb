import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JuegosService } from './../services/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(private httpClient:HttpClient, private _juegosservice:JuegosService) { }

  ngOnInit(): void {
      this._juegosservice.getJuegos()
      .subscribe((res:any) => {
      });
  }
  
}
