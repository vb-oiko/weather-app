import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './components/workplace/workplace.component';
import { CityInputComponent } from './components/common/city-input/city-input.component';
import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CityWeatherComponent } from './components/common/city-weather/city-weather.component';
import { CityForecastComponent } from './components/common/city-forecast/city-forecast.component';
import { WeatherIconComponent } from './components/common/weather-icon/weather-icon.component';
import { StarredCitiesComponent } from './components/starred-cities/starred-cities.component';
import { CityViewComponent } from './components/city-view/city-view.component';

@NgModule({
  declarations: [
    WorkplaceComponent, 
    CityInputComponent, 
    CityWeatherComponent, 
    CityForecastComponent, 
    WeatherIconComponent, 
    StarredCitiesComponent, 
    CityViewComponent
  ],
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
