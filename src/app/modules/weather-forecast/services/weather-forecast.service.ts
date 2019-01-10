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
  
  private _WEATHER_APIURL: string = 'http://api.openweathermap.org/data/2.5/';
  private _WEATHER_APIKEY: string = '852632e4d0e2e9f87c1d590ec53e07bc';
  private _WEATHER_UNITS = 'metric';

  constructor(private _http: HttpClient) { }

  getCurrentWeather(city: string):Observable<IWeather> {
    return this._http.get(this._WEATHER_APIURL+ 'weather?q=' + city + '&APPID=' + this._WEATHER_APIKEY + '&units=' + this._WEATHER_UNITS)
      .pipe(
        map(o => {
          return <IWeather>{
            cityAndCountry: o['name'] + ', ' + o['sys']['country'],
            date: Date.now(),
            condDescr: o['weather'][0]['description'],
            temp: o['main']['temp'],
            pressure: o['main']['pressure'],
            humidity: o['main']['humidity'],
            windSpeed: o['wind']['speed'],
          }
        })
      ) as Observable<IWeather>;
     
  }

  getWeatherForecast(city: string): Observable<IWeather[]> {
    return this._http.get(this._WEATHER_APIURL+ 'forecast?q=' + city + '&APPID=' + this._WEATHER_APIKEY + '&units=' + this._WEATHER_UNITS)
    .pipe(map(o => {
      
      let forecast: IWeather[] = [];
      let city: string = o['city']['name'] + ', ' + o['city']['country'];
      
      for(let i=0;i<o['list'].length;i++) {
        forecast.push(<IWeather>{
          cityAndCountry: city,
          date: o['list'][i]['dt'] * 1000,
          condDescr: o['list'][i]['weather'][0]['description'],
          temp: o['list'][i]['main']['temp'],
          pressure: o['list'][i]['main']['pressure'],
          humidity: o['list'][i]['main']['humidity'],
          windSpeed: o['list'][i]['wind']['speed'],
        })
      }
      
      return forecast;

    })) as Observable<IWeather[]>;
  }
}

