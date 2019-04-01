# Service advanced with http
## Các bước khi làm việc với service http
1. Tạo 1 service: `ng g s api`
    * Lưu ý: 
        + Trong file service có 1 cái option đó là `providedIn: 'root'` cái này mặc định nó sẽ provide vào app-root nên chúng ta không cần `provides` nó vào app-root.
        + Trường hợp nếu ko dùng `providedIn: 'root'` thì ta phải vào trong file `app.module.ts` và provide nó vào như thế này:
          ```
          @NgModule({
            providers: [ApiService]
          })
          ```

2. Cần import module `HttpClientModule` vào trong app-root để ta có thể dùng được những feature của module htttp
    ```
      import { HttpClientModule } from '@angular/common/http';
      @NgModule({
        imports: [
          HttpClientModule
        ]
      })
    ```

3. Trong `api.service.ts` file cần import `httpClient` để dùng những phương thức của nó như: `post, get, put, patch, ...`


4. Cần tạo 1 biến môi trường trong file environment
    ```
      export const environment = {
        production: false,
        api: 'https://reqres.in/api/'
      };
    ```
> Trên đây là những bước quan trọng mà chúng ta cần chuẩn bị để làm bước tiếp theo đó là dùng những phương thức mà httpClient cung cấp cho chúng ta.

## Triển khai với `api` service
1. Tạo một `const` `ENDPOINT` và khai báo những path mà chúng ta cần gọi đến server. xem ví dụ dưới:
    ```
    export const ENDPOINT = {
      users: 'users',
      events: 'events'
      ...
    };
    ```

2. Tạo một `const` `API_DOMAIN` để lấy thông tin domain từ phía biến environment
    ```
      // Biến này sẽ tự động lấy domain api phù hợp với từng môi trường khi chúng ta build dự án. Nếu build --prod nó sẽ lấy file `..prod.ts` ngược lại thì sẽ lấy file dev.
      export const API_DOMAIN = environment.api;
    ```

3. Chi tiết những phương thức mà chúng ta sẽ sữ dụng
    ```
      // Cần import những method liên quan từ rxjs hoặc từ angular
      import { environment } from './../../../environments/environment';
      import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
      import { Observable, throwError } from 'rxjs';
      import { catchError } from 'rxjs/operators';


      /**
      * Get api
      * @param url : path from ENDPOINT
      * @param params : ex: {key: value}
      */
      get(url: string, params?: any): Observable<any> {
        return this.http.get(API_DOMAIN + url, {
          params: params
        }).pipe(
          catchError(this.handleError)
        );
      }

      /**
      * Post api
      * @param url : path from ENDPOINT
      * @param params : ex: {key: value}
      */
      post(url: string, params?: any): Observable<any> {
        return this.http.post(API_DOMAIN + url, params).pipe(
          catchError(this.handleError)
        );
      }

      /**
      * Put api
      * @param url : path from ENDPOINT
      * @param params : ex: {key: value}
      */
      put(url: string, params?: any): Observable<any> {
        return this.http.put(API_DOMAIN + url, params).pipe(
          catchError(this.handleError)
        );
      }

      /**
      * Get file from assets folder
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
      * @param url : string
      */
      getConfigResponse(url: string): Observable<HttpResponse<any>> {
        return this.http.get(API_DOMAIN + url, {observe: 'response'}).pipe(
          catchError(this.handleError)
        );
      }

      /**
      * Handle error from Response
      * @param error: any
      */
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
    ```
> Trên đây là những cái chúng ta hay dùng, mọi người có thể đọc thêm trên docs của angular.

## Page để practice với api
> https://reqres.in/
