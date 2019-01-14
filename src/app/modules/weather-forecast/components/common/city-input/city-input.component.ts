import { Component, OnInit, Directive } from '@angular/core';
import { WeatherForecastService } from '../../../services/weather-forecast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})

export class CityInputComponent implements OnInit {

  cityInput: string = '';

  constructor(
    private _wfs: WeatherForecastService,
    private router: Router,
  ) { 
  }

  ngOnInit() {
  }

  selectCity() {
    this._wfs.getCurrentWeather(this.cityInput).subscribe(
      weather => {
        this.cityInput = '';
        this.router.navigate(['home/city', weather.cityAndCountry]);
      },
      error => {
        // console.log('City: ', this.cityInput, ' not found!');
      },
    )
  };

}
