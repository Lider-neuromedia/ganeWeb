import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public url: string;

  constructor(private _http: HttpClient, private _router:Router) {
    this.url = GLOBAL.url;
  }

  getComunicados(): Observable<any>{
    return this._http.get(`${this.url}/comunicados`);
  }
  getComunicado(slug:string): Observable<any>{
    // let params = new HttpParams().append('?slug=', slug);
    return this._http.get(`${this.url}/comunicados/?slug=${slug}/`, {
      // params,
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
