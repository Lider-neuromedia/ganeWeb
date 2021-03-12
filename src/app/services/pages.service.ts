import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }
  getQuienesSomos(): Observable<any>{
    return this._http.get(`${this.url}/pages/352/`);
  }
  getPeriodicos(): Observable<any>{
    return this._http.get(`${this.url}/pages/433/`);
  }
  getFinancieros(): Observable<any>{
    return this._http.get(`${this.url}/pages/452/`);
  }
  getPrivacidad(): Observable<any>{
    return this._http.get(`${this.url}/pages/469/`);
  }
  getRecargas(): Observable<any>{
    return this._http.get(`${this.url}/pages/500/`);
  }
  getSoat(): Observable<any>{
    return this._http.get(`${this.url}/pages/535/`);
  }
  getGiros(): Observable<any>{
    return this._http.get(`${this.url}/pages/103/`);
  }
  getJuegos(): Observable<any>{
    return this._http.get(`${this.url}/pages/317/`);
  }
  getBetplay(): Observable<any>{
    return this._http.get(`${this.url}/pages/157/`);
  }
  getPagos(): Observable<any>{
    return this._http.get(`${this.url}/pages/235/`);
  }
  getQuienesSomosFundacion(): Observable<any>{
    return this._http.get(`${this.url}/pages/660/`);
  }
  getAyudasSociales(): Observable<any>{
    return this._http.get(`${this.url}/pages/681/`);
  }
  getPoliticasFundacion(): Observable<any>{
    return this._http.get(`${this.url}/pages/687/`);
  }
  getEducacionContinuaFundacion(): Observable<any>{
    return this._http.get(`${this.url}/pages/701/`);
  }
  getSalud(): Observable<any>{
    return this._http.get(`${this.url}/pages/714/`);
  }
}
