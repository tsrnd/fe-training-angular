import { Injectable} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
@Injectable()

export class WeatherService {
    responseData;
    constructor(private http: HttpClient){}
    getTemp(cityName: string) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=4d63e86f57ff7718cd7b482a82979e7a&units=metric&q=' + cityName
        return this.http.get(url)
        .toPromise()
        .then(
            (res: Response) => this.responseData = res['main']
        )
        .then(resJson => this.responseData = resJson.temp)
    }
}