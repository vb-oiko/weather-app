import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModuleStateService } from '../../../services/module-state.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent implements OnInit {

  cityInput: string = '';
  subscription: Subscription;

  constructor(
    private _mss: ModuleStateService,
  ) { 
    this.subscription = this._mss.getState().subscribe(curState => {
      if (curState.cityFound) {
        this.cityInput = '';
      }
    });
  }

  ngOnInit() {
  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }

  selectCity() {
    this._mss.searchCity(this.cityInput);
  };

}
