import { Injectable } from '@angular/core';
// Cần import những method liên quan từ rxjs hoặc từ angular
import { environment } from './../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const ENDPOINT = {
  users: 'users',
  events: 'events'
};

export const API_DOMAIN = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Get api
   * @param url : path from ENDPOINT
   * @param params : ex: {key: value}
   */
  get(url: string, params?: any): Observable<any> {
    return this.http.get(API_DOMAIN + url, {
      // tslint:disable-next-line:object-literal-shorthand
      params: params
    }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Post API
   * @param url : path from ENDPOINT
   * @param params : ex: {key: value}
   */
  post(url: string, params?: any): Observable<any> {
    return this.http.post(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Put API
   * @param url : path from ENDPOINT
   * @param params : ex: {key: value}
   */
  put(url: string, params?: any): Observable<any> {
    return this.http.put(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get file from folder Assets
   * @param url : path from assets folder
   */
  getAssets(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Get api with full response
   * include: headers, body, ...
   * @param url :string
   */
  getConfigResponse(url: string): Observable<HttpResponse<any>> {
    return this.http.get(API_DOMAIN + url, {observe: 'response'}).pipe(
      catchError(this.handleError)
    );
  }
  /**
   * Handle error from Response
   * @param error any
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occured:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend return code ${error.status},` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  constructor(private http: HttpClient) { }
}
