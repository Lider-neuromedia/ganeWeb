import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // url = "http://localhost:8400/";
  url = "http://10.130.12.35";
  constructor(private auth: HttpClient) { }

  generarToken(){
    const body = {
      usr_billetera: "3171112234",
      password: "2468"
    }
    return this.auth.post(`${this.url}api/auth/signin`, body);
  }

  generarResultados(fecha: string, token: string){
    const body = {
      fcha_rsltdo: fecha
    }
    const headers = new HttpHeaders({
      'x-access-token': token
    })
    return this.auth.post(`${this.url}loteria/resultados`, body, {headers: headers});
  }
}
