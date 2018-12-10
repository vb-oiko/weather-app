import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent implements OnInit {

  cityInput: string = 'Kyiv';

  @Output() citySelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectCity() {
    this.citySelected.emit(this.cityInput);
  };

}
