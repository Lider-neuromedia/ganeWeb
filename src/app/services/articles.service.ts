import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getArticles(): Observable<any>{
    return this._http.get(`${this.url}/posts`);
  }
  getArticle(id: string): Observable<any>{
    return this._http.get(`${this.url}/posts/${id}/`);
  }
}
