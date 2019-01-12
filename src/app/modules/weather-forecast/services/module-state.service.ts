import { Injectable } from '@angular/core';
import { IState } from '../models/weather-forecast.interfaces';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModuleStateService {

  constructor() { }

  private _curState:IState = {
    curCity: '',
    starredCities: [
      'Kyiv, UA',
      'London, GB'
    ],
    cityFound: false,
  };
  
  private state = new Subject<IState>();
  
  toggleCity(city: string) {
    let i = this._curState.starredCities.indexOf(city);
    if (i !== -1) {
      this._curState.starredCities.splice(i, 1);
    } else {
      this._curState.starredCities.push(city);
    };
    console.log(this._curState);
    this.state.next(this._curState);
  };
  
  searchCity(city: string) {
    this._curState.curCity = city;
    this._curState.cityFound = false;
    console.log(this._curState);
    this.state.next(this._curState);
  };
  
  getState(): Observable<IState> {
    return this.state.asObservable();
  }
  
  setCityAsFound(city:string) {
    this._curState.curCity = city;
    this._curState.cityFound = true;
    console.log(this._curState);
    this.state.next(this._curState);
  }

}