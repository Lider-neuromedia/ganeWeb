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
  getVivienda(): Observable<any>{
    return this._http.get(`${this.url}/pages/763/`);
  }
  getRecreacion(): Observable<any>{
    return this._http.get(`${this.url}/pages/781/`);
  }
  getPrimeraInfancia(): Observable<any>{
    return this._http.get(`${this.url}/pages/797/`);
  }
  getCuidarte(): Observable<any>{
    return this._http.get(`${this.url}/pages/811/`);
  }
  getEscuelaIniciacionDeportiva(): Observable<any>{
    return this._http.get(`${this.url}/pages/831/`);
  }
  getRestaurante(): Observable<any>{
    return this._http.get(`${this.url}/pages/851/`);
  }
  getAmericaCali(): Observable<any>{
    return this._http.get(`${this.url}/pages/859/`);
  }
  getInformesFundacion(): Observable<any>{
    return this._http.get(`${this.url}/pages/875/`);
  }
  getPreguntasFrecuentes(): Observable<any>{
    return this._http.get(`${this.url}/pages/894/`);
  }
  getPagoPremios(): Observable<any>{
    return this._http.get(`${this.url}/pages/917/`);
  }
  getSistemaGestionCalidad(): Observable<any>{
    return this._http.get(`${this.url}/pages/934/`);
  }
  getCulturaAnticorrupcion(): Observable<any>{
    return this._http.get(`${this.url}/pages/943/`);
  }
  getCulturaAntilavado(): Observable<any>{
    return this._http.get(`${this.url}/pages/968/`);
  }
  getLineaEtica(): Observable<any>{
    return this._http.get(`${this.url}/pages/993/`);
  }
}
