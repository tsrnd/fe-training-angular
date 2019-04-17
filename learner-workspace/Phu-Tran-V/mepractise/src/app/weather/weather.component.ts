import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { log } from 'util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  cityName = '';
  temp = null;
  isLoading = false;
  constructor(private weatherService: WeatherService) { }
  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
    .then(temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
      this.isLoading = false;
    })
    .catch(err => {
      alert('not found');
      this.isLoading = false;
      this.cityName = '';
      this.txtCityName = '';
    });
  }
  getMessage() {
    if (this.isLoading) {
      return 'loading...'
    }
    return this.cityName === '' ? ' Enter city name': (this.cityName + ' is now ' + this.temp);
  }
  ngOnInit() {
    // this.WeatherService.getTemp('DaNang')
    // .then(temp => console.log(temp))
    // .catch(err => console.log(err));
  }

}
