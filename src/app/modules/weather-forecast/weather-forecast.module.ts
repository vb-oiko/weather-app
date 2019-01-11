import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './components/workplace/workplace.component';
import { CityInputComponent } from './components/city-input/city-input.component';
import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';

@NgModule({
  declarations: [WorkplaceComponent, CityInputComponent, CityWeatherComponent, CityForecastComponent, WeatherIconComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
  ],
  exports: [WorkplaceComponent],
})
export class WeatherForecastModule { }
