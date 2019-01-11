import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  constructor() { }

  @Input () curWeather: IWeather;

  ngOnInit() {
    console.log(this.curWeather);
    
  }

}
