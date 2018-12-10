import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {

  cityName: string = '';

  constructor() { }

  ngOnInit() {
  }

  getWeatherByCityName (cityName: string) {
    this.cityName = cityName;
  };

}
