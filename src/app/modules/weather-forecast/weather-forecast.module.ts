import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './components/workplace/workplace.component';
import { CityInputComponent } from './components/city-input/city-input.component';
import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [WorkplaceComponent, CityInputComponent],
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
