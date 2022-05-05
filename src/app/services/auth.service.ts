import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // url = "http://localhost:8400/";
  // url = "http://10.130.12.35:8080/";
  // acceso.gane.com.co:9091/loteriasseguras/api/consultar/resultados/loterias
  url = 'https://acceso.gane.com.co:9091/';
  constructor(private auth: HttpClient) {}

  generarToken() {
    const body = {
      usr_billetera: '3171112234',
      password: '2468',
    };
    return this.auth.post(`${this.url}api/auth/signin`, body);
  }

  generarResultados(fecha: string) {
    const body = {
      fcha_rsltdo: fecha,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.auth.post(
      `${this.url}loteriasseguras/api/consultar/resultados/loterias`,
      body,
      {
        headers: headers,
      }
    );
  }
}
