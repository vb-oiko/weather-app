import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWeather } from '../../../models/weather-forecast.interfaces';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {

  constructor() { }

  @Input () curWeather: IWeather; 
  @Input() starred:string;
  @Input() display: string;

  @Output() starClicked = new EventEmitter();

  ngOnInit() {
  }

  starClick() {
    this.starClicked.emit(this.curWeather.cityAndCountry);
  }
}
