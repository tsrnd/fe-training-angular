import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_HOST = environment.api;

@Injectable({
  providedIn: CoreModule
})
export class ApiService {

  constructor(
    private api: HttpClient
  ) { }

  /**
   * Send request and get response from api
   * @param path : api endpoint
   * @param params : api param
   * @param headers : addition header param
   */
  get(path: string, params?: any, headers?: any): Observable<any> {
    return this.api.get(API_HOST.concat(path), {
      headers,
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
