import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public url: string;

  constructor(private _http: HttpClient, private _router:Router) {
    this.url = GLOBAL.url;
  }

  getArticles(): Observable<any>{
    return this._http.get(`${this.url}/posts`);
  }
  getArticle(slug: string): Observable<any>{
    return this._http.get(`${this.url}/posts/?slug=${slug}/`, {
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
