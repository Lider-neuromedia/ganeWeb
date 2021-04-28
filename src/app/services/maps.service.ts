import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public SuperGiros_getLocations: any;
  dataPuntos:any = {};
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private _http: HttpClient) {
    this.SuperGiros_getLocations = GLOBAL.SuperGiros_getLocations;
  }

  // Auth(): Observable<any>{
  //   const headers = new HttpHeaders({
  //     "Access-Control-Allow-Origin": "*",
  //     'Content-Type':'application/json'
  //   });
  //   return this._http.post(`${this.SuperGiros_auth}`, environment.data, {headers:headers}
  //   ).pipe(
  //       map(res => {
  //           this.saveToken(res['accessToken']);
  //       })
  //   );
  // }
  getLocations(data): Observable<any>{
    return this._http.post(`${this.SuperGiros_getLocations}`, data);
  }

  // private saveToken(accessToken: string){
  //   this.Token = accessToken;
  //   localStorage.setItem('x-access-token', accessToken);
  //   sessionStorage.setItem('x-access-token', accessToken);
  // }

  // getToken(){
  //     if(localStorage.getItem('x-access-token') || sessionStorage.getItem('x-access-token')){
  //       this.Token = localStorage.getItem('x-access-token');
  //       this.Token = sessionStorage.getItem('x-access-token');
  //     }else{
  //         this.Token = '';
  //     }
  //     return this.Token;
  // }
}
