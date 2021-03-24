import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CampanaService {
  
  public url: string;

  constructor(private _http: HttpClient, private _router:Router) {
    this.url = GLOBAL.url;
  }

  getCampanas(): Observable<any>{
    return this._http.get(`${this.url}/campanas`);
  }
  getCampana(slug: string): Observable<any>{
    return this._http.get(`${this.url}/campanas/?slug=${slug}/`, {
    }).pipe(
        map(res => res),
        catchError(err =>{
          switch(err.status){
            case 404:
              this._router.navigate(['/404']);
              break;
          }
          return throwError('Error en el servicio');
        })
    );
  }
}

