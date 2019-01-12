import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { ModuleStateService } from '../../services/module-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.scss']
})
export class CityViewComponent implements OnInit {

  curWeather: IWeather;
  forecast: IWeather[];
  subscription: Subscription;
  starred: boolean;

  constructor(
    private _wfs: WeatherForecastService,
    private _mss: ModuleStateService,
  ) { 
    this.subscription = this._mss.getState().subscribe ( curState => {
      if (!curState.cityFound) {
        this.getWeatherByCityName(curState.curCity);
      } else {
        this.starred = curState.starredCities.includes(curState.curCity);
      };
    });
  }

  ngOnInit() {
  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }

  cityClick() {
    this._mss.toggleCity(this.curWeather.cityAndCountry)
  }

  getWeatherByCityName (cityName: string) {

    this._wfs.getCurrentWeather(cityName).subscribe(
      weather => {
        this.curWeather = weather;
        this._mss.setCityAsFound( this.curWeather.cityAndCountry);
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
