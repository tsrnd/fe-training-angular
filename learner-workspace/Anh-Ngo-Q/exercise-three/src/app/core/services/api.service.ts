import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { CoreModule } from '../core.module';

export const API_DOMAIN = environment.api;
const httpOptions = {
  observe: 'response'
};

@Injectable({
  providedIn: CoreModule
})
export class ApiService {

  constructor(private client: HttpClient) { }

  /**
   * send request to api with method get
   * @param url : endpoint's path
   * @param param : addition parameters
   */
  get(url: string, param?: any): Observable<any> {
    return this.client.get(API_DOMAIN.concat(url), param).pipe(catchError(this.handleError));
  }

  /**
   * send request to api with method post
   * @param url : endpoint's path
   * @param param : addition parameters
   */
  post(url: string, param?: any): Observable<any> {
    return this.client.post(API_DOMAIN.concat(url), param).pipe(catchError(this.handleError));
  }

  /**
   * send request to api with method put
   * @param url : endpoint's path
   * @param param : addition parameters
   */
  put(url: string, param?: any): Observable<any> {
    return this.client.put(API_DOMAIN.concat(url), param).pipe(catchError(this.handleError));
  }

  /**
   * send request to api with method patch
   * @param url : endpoint's path
   * @param param : addition parameters
   */
  patch(url: string, param?: any): Observable<any> {
    return this.client.patch(API_DOMAIN.concat(url), param).pipe(catchError(this.handleError));
  }

  /**
   * get data in assets folder from host
   * @param url : url from assets folder in host
   */
  getAssets(url: string): Observable<any> {
    return this.client.get(url).pipe(catchError(this.handleError));
  }

  /**
   * send request to api with method get and receive full response
   * @param url : endpoint's path
   * @param params : addition paramters
   */
  getFullResponse(url: string, params?: any): Observable<any> {
    return this.client.get(url, {
      observe: 'response',
      params
    }).pipe(catchError(this.handleError));
  }

  /**
   * handle error
   * @param err : error catched
   */
  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error('An error occured:', err.error.message);
    } else {
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
