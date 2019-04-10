import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const END_POINT = {
  listNews: 'news',
  newsJson: 'assets/news.json',
  users: 'profile'
};

export const API_DOMAIN = environment.api;


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(public httpClient: HttpClient) {
  }
  get(url: string, params?: any): Observable<any> {
    return this.httpClient.get(API_DOMAIN + url, {
      // tslint:disable-next-line:object-literal-shorthand
      params: params
    }).pipe(
      catchError(this.handleError)
    );
  }
  post(url: string, params?: any): Observable<any> {
    return this.httpClient.post(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  put(url: string, params?: any): Observable<any> {
    return this.httpClient.put(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  patch(url: string, params?: any): Observable<any> {
    return this.httpClient.patch(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  getAssets(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getConfigResponse(url: string): Observable<HttpResponse<any>> {
    return this.httpClient.get(API_DOMAIN + url, {observe: 'response'}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
