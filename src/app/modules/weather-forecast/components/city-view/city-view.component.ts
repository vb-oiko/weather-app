import { Component, OnInit } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { ModuleStateService } from '../../services/module-state.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.scss']
})
export class CityViewComponent implements OnInit {

  curWeather: IWeather;
  forecast: IWeather[];
  starred: boolean;
  city: string;

  constructor(
    private _wfs: WeatherForecastService,
    private _mss: ModuleStateService,
    private route: ActivatedRoute,
  ) { 
    this.route.params.subscribe( params => {
      this.city = params.name;
      this.getWeatherByCityName(params.name);
    });
  }

  ngOnInit() {
  }

  cityClick() {
    this._mss.toggleCity(this.curWeather.cityAndCountry);
    this.starred = this._mss.starredCities.includes(this.city);
  }

  getWeatherByCityName (cityName: string) {

    this._wfs.getCurrentWeather(cityName).subscribe(
      weather => {
        this.curWeather = weather;
        this.starred = this._mss.starredCities.includes(this.city);

      },
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
