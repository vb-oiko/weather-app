import { Component, OnInit, OnDestroy} from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { ModuleStateService } from '../../services/module-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starred-cities',
  templateUrl: './starred-cities.component.html',
  styleUrls: ['./starred-cities.component.scss']
})

export class StarredCitiesComponent implements OnInit {
  
  weather: IWeather[] = [];
  subscription: Subscription;
  starredCities: string[];

  constructor( 
    private _wfs:WeatherForecastService,
    private _mss: ModuleStateService,
  ) {
    this.subscription = this._mss.getState().subscribe(curState => {
      this.starredCities =  curState.starredCities;
      this.getWeather();
    });
  }

  ngOnInit() {
  }
  
  OnDestroy(){
    this.subscription.unsubscribe();
  }

  cityStarClick(city: string) {
    this._mss.toggleCity(city);
  }

  getWeather(){
    this.weather = [];
    for (let i = 0; i < this.starredCities.length; i++) {
      this._wfs.getCurrentWeather(this.starredCities[i]).subscribe(
        wth => {this.weather.push(wth)},
        error => {console.log('Fail to load the weather in ', this.starredCities[i], error)
        }
      );
      
    }
  }

}
