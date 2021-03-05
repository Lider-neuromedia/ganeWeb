import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  public urlW: string;

  constructor(private _http: HttpClient) {
    this.urlW = GLOBAL.urlW;
  }
  getQuienesSomos(): Observable<any>{
    return this._http.get(`${this.urlW}/pages/352/`);
  }
}
