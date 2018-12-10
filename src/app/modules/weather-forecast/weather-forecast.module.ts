import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './components/workplace/workplace.component';

@NgModule({
  declarations: [WorkplaceComponent],
  imports: [
    CommonModule
  ],
  exports: [WorkplaceComponent],
})
export class WeatherForecastModule { }
