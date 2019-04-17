import { Injectable} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
@Injectable()

export class IpService {
    responseData;
    constructor(private http: HttpClient){}
    getIp() {
        return this.http.get('https://reqres.in/api/users/2')
        .toPromise()
        .then(
            (res: Response) => this.responseData = res['data']
        )
        .then(resJson => this.responseData = resJson.first_name)
    }
}