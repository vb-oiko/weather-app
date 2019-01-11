import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from '../../models/weather-forecast.interfaces';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {

  constructor() { }

  @Input() forecast: IWeather[];

  ngOnInit() {
  }

}
