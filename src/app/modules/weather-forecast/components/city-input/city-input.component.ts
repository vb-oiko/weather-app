import { Input, Component, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent implements OnInit {

  cityInput: string = '';

  @Input() cityFound: string;

  @Output() citySelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    
    if (this.cityFound == 'true') {
      this.cityInput = '';
    }
  }

  selectCity() {
    this.citySelected.emit(this.cityInput);
  };

}
