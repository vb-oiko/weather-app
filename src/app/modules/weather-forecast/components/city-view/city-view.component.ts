import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { ModuleStateService } from '../../services/module-state.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.scss']
})
export class CityViewComponent implements OnInit {

  curWeather: IWeather;
  forecast: IWeather[];
  starred: string;
  city: string;
  subscr: Subscription;

  constructor(
    private _wfs: WeatherForecastService,
    public _mss: ModuleStateService,
    private route: ActivatedRoute,
  ) { 

    this.route.params.subscribe( params => {
      this.city = params.name;
      this.getWeatherByCityName(params.name);
    });

    this.subscr = this._mss.starredCities.subscribe(cities => {
      this.starred = cities.includes(this.city).toString();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }

  cityClick() {
    this._mss.toggleCity(this.curWeather.cityAndCountry);
  }
  
  getWeatherByCityName (cityName: string) {
    
    this._wfs.getCurrentWeather(cityName).subscribe(
      weather => {
        this.curWeather = weather;
        this.starred = this._mss.isStarred(this.curWeather.cityAndCountry);
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
