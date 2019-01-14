import { Injectable } from '@angular/core';
import { IState } from '../models/weather-forecast.interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})

export class ModuleStateService {

  private curState:IState = { starredCities: []};
  private state: BehaviorSubject<IState>;

  constructor (
    private storage:LocalStorageService,
  ) {

    if (this.storage.retrieve('storedCities')) {
      this.curState.starredCities = this.storage.retrieve('storedCities');
    };

    this.state = new BehaviorSubject<IState>(this.curState);
  }


  toggleCity(city: string) {

    console.log(city);
    console.log( this.curState);
    
    let i = this.curState.starredCities.indexOf(city);
    if (i !== -1) {
      this.curState.starredCities.splice(i, 1);
    } else {
      this.curState.starredCities.push(city);
    };

    this.storage.store('storedCities', this.curState.starredCities)
    this.state.next(this.curState);
  };
  
  getState(): Observable<IState> {
    return this.state.asObservable();
  }
  
}