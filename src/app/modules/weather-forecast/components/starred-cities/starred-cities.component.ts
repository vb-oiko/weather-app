import { Component, OnInit, OnDestroy } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { ModuleStateService } from '../../services/module-state.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starred-cities',
  templateUrl: './starred-cities.component.html',
  styleUrls: ['./starred-cities.component.scss']
})

export class StarredCitiesComponent implements OnInit {
  
  weather: IWeather[] = [];
  subscr: Subscription;
  starClicked: boolean = false;

  constructor( 
    private _wfs:WeatherForecastService,
    public _mss: ModuleStateService,
    private router: Router,
  ) { 
    this.subscr = this._mss.starredCities.subscribe(cities => {
      this.getWeather(cities);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }
  
  cityStarClick(city: string) {
    this.starClicked = true;
    this._mss.toggleCity(city);
  }
  
  cityClicked(weather: IWeather) {
    if (this.starClicked) {
      this.starClicked = false;
    } else {
      this.router.navigate(["home/city", weather.cityAndCountry]);
    };
  }

  getWeather(cities: string[]){
    this.weather = [];
    for (let i = 0; i < cities.length; i++) {
      this._wfs.getCurrentWeather(cities[i]).subscribe(
        wth => {this.weather.push(wth)},
        error => {console.log('Fail to load the weather in ', cities[i], error)
        }
      );
      
    }
  }

}
