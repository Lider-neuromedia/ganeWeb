import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampanaService {
  
  public urlW: string;

  constructor(private _http: HttpClient) {
    this.urlW = GLOBAL.urlW;
  }

  getCampanas(): Observable<any>{
    return this._http.get(`${this.urlW}/campanas`);
  }
  getCampana(id: string): Observable<any>{
    return this._http.get(`${this.urlW}/campanas/${id}/`);
  }
}

