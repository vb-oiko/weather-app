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

  cityName: string = '';
  curWeather: IWeather;

  constructor( private _wfs: WeatherForecastService) { }

  ngOnInit() {
  }

  getWeatherByCityName (cityName: string) {
    this.cityName = cityName;
    this._wfs.getCurrentWeather(this.cityName)
      .subscribe(
        weather => {this.curWeather = weather;},
        error => {
          console.log(error);
          this.curWeather = undefined;
        }
      )
  };

}