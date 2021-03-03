import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampanaService {
  
  public postC: string;

  constructor(private _http: HttpClient) {
    this.postC = GLOBAL.postC;
  }

  getCampanas(): Observable<any>{
    return this._http.get(`${this.postC}/campanas`);
  }
  getCampana(id: string): Observable<any>{
    return this._http.get(`${this.postC}/campanas/${id}/`);
  }
}

