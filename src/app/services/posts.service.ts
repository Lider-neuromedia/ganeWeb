import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';

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
  // searchComunicados(text:any){
  //   let comunArr:any[] = [];
  //   text = text.toLowerCase();
  //   for(let ){

  //   }
  // }
  getComunicado(id: string): Observable<any>{
    return this._http.get(`${this.url}/comunicados/${id}/`);
  }
}
