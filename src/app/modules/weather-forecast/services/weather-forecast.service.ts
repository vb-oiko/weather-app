import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../models/weather-forecast.interfaces';
import { map } from "rxjs/operators";
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class WeatherForecastService {
  
  private _APIURL: string = 'http://api.openweathermap.org/data/2.5/weather';
  private _APIKEY: string = '852632e4d0e2e9f87c1d590ec53e07bc';
  private _UNITS = 'metric';

  constructor(private _http: HttpClient) { }

  getCurrentWeather(city: string):Observable<IWeather> {
    return this._http.get(this._APIURL+ '?q=' + city + '&APPID=' + this._APIKEY + '&units=' + this._UNITS)
      .pipe(
        map(o => {
          return <IWeather>{
            condMain: o['weather'][0]['main'],
            condDescr: o['weather'][0]['description'],
            temp: o['main']['temp'],
            pressure: o['main']['pressure'],
            humidity: o['main']['humidity'],
            windSpeed: o['wind']['speed'],
            cloudiness : o['clouds']['all']
          }
        })
      ) as Observable<IWeather>;
     
  }
}

