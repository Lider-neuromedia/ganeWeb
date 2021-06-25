import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Token } from '../models/generarToken';

declare var $: any;

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  token: string;
  resultados: any;
  fechas: string;
  maxFecha: any;
  constructor(private servicio: AuthService) { }

  ngOnInit(): void {
    this.fechas = `${new Date().getDate()}/${(new Date().getMonth() + 1)}/${new Date().getFullYear()}`
    this.maxFecha = `${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10?'0'+(new Date().getMonth() + 1):(new Date().getMonth() + 1)}-${new Date().getDate()< 10?'0'+new Date().getDate():new Date().getDate()}`;
    console.log(this.maxFecha);
    this.getDatosTabla();
  }

  getDatosTabla(fecha?:any){
    if(fecha?.target.value){
      let fecha = $('#date').val();
      let resFecha = fecha.split("-");
      let reversedFecha = resFecha.reverse(); 
      let FechaOb = reversedFecha.join('-');
      this.fechas = FechaOb;
    }
    this.servicio.generarToken().subscribe((resp: Token) => {
      this.token = resp.accessToken
      console.log(this.fechas);
      this.servicio.generarResultados(this.fechas, this.token).subscribe((resp: any) => {
        this.resultados = resp.message;
      })
    });
  }
  abrirLoterias(){
    $('.modal-resultados').toggleClass('abrir-modal');
  }

}
