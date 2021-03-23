import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getComunicados(): Observable<any>{
    return this._http.get(`${this.url}/comunicados`);
  }
  getComunicado(id: string): Observable<any>{
    return this._http.get(`${this.url}/comunicados/${id}/`);
  }
}
