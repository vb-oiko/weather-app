import { Component, OnInit } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss'],
  providers: [WeatherForecastService]
})
export class WorkplaceComponent implements OnInit {

  curWeather: IWeather;
  forecast: IWeather[];

  constructor( private _wfs: WeatherForecastService) { }

  ngOnInit() {
    // this._wfs.getWeatherForecast('Kyiv').subscribe(_ => {});
  }
  
  getWeatherByCityName (cityName: string) {

    this._wfs.getCurrentWeather(cityName).subscribe(
      weather => {this.curWeather = weather;},
      error => {
        console.log(error);
        this.curWeather = undefined;
      }
    );

    this._wfs.getWeatherForecast(cityName).subscribe(
      forecast => this.forecast = forecast,
      error => {
        console.log(error);
        this.forecast = undefined;
      }
    );
  };

}