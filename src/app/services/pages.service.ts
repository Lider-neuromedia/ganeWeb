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
}
