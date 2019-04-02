import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment';


export const API_DOMAIN = environment.api;
export const ENDPOINT = {
  users: 'users',
  events: 'events'
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor( private http: HttpClient) { }

  /**
   * get api
   * @param url: path
   * @param params: type object
   */
  get(url: string, params?: any): Observable<any> {
    return this.http.get(API_DOMAIN + url, {
      // tslint:disable-next-line: object-literal-shorthand
      params: params
    }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * put api
   * @param url
   * @param params
   */
  put(url: string, params?: any): Observable<any> {
    return this.http.put(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * post api
   * @param url
   * @param params
   */
  post(url: string, params?: any): Observable<any> {
    return this.http.post(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * patch api
   * @param url
   * @param params
   */
  patch(url: string, params?: any): Observable<any> {
    return this.http.patch(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * get assets
   * @param url
   */
  getAssets(url: string): Observable<any> {
    return this.http.get('assets/' + url).pipe(
      catchError(this.handleError)
    );
  }


  getFullRespone(url: string): Observable<HttpResponse<any>> {
    return this.http.get(API_DOMAIN + url, {observe: 'response'}).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}

