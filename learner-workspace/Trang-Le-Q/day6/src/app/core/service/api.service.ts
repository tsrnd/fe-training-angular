import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



export const ENDPOINT = {
  users: 'users',
  event: 'events'
};
export const API_DOMAIN = environment.api;

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    return this.http.get(API_DOMAIN + url, {
      params: params
    }).pipe(
      catchError(this.handleError)
    );
  }

  post(url: string, params?: any): Observable<any> {
    return this.http.post(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  put(url: string, params?: any): Observable<any> {
    return this.http.put(API_DOMAIN + url, params).pipe(
      catchError(this.handleError)
    );
  }

  getAssets(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getConfigResponse(url: string): Observable<HttpResponse<any>> {
    return this.http.get(API_DOMAIN + url, {observe: 'response'}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


}
