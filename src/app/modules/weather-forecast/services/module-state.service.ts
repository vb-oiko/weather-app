import { Injectable } from '@angular/core';
import { IState } from '../models/weather-forecast.interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModuleStateService {

  constructor () {}

  private _curState:IState = {
    starredCities: [
      'Kyiv, UA',
      'London, GB'
    ],
  };
  
  private state = new BehaviorSubject<IState>(this._curState);

  toggleCity(city: string) {
    let i = this._curState.starredCities.indexOf(city);
    if (i !== -1) {
      this._curState.starredCities.splice(i, 1);
    } else {
      this._curState.starredCities.push(city);
    };
    this.state.next(this._curState);
  };
  
  getState(): Observable<IState> {
    return this.state.asObservable();
  }
  
}