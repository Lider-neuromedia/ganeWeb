import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';

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
}