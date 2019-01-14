import { Component, OnInit, OnDestroy} from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { ModuleStateService } from '../../services/module-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starred-cities',
  templateUrl: './starred-cities.component.html',
  styleUrls: ['./starred-cities.component.scss']
})

export class StarredCitiesComponent implements OnInit {
  
  weather: IWeather[] = [];

  constructor( 
    private _wfs:WeatherForecastService,
    private _mss: ModuleStateService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getWeather();
  }
  
  cityStarClick(city: string) {
    this._mss.toggleCity(city);
    this.getWeather();
  }

  cityClicked(city: string) {
    this.router.navigate(["home/city", city]);
  }

  getWeather(){
    this.weather = [];
    for (let i = 0; i < this._mss.starredCities.length; i++) {
      this._wfs.getCurrentWeather(this._mss.starredCities[i]).subscribe(
        wth => {this.weather.push(wth)},
        error => {console.log('Fail to load the weather in ', this._mss.starredCities[i], error)
        }
      );
      
    }
  }

}
