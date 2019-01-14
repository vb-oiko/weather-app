import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class ModuleStateService {

  starredCities: string[] = [];

  constructor (
    private storage:LocalStorageService,
  ) {

    if (this.storage.retrieve('storedCities')) {
      this.starredCities = this.storage.retrieve('storedCities');
    };
  }


  toggleCity(city: string) {

    let i = this.starredCities.indexOf(city);
    if (i !== -1) {
      this.starredCities.splice(i, 1);
    } else {
      this.starredCities.push(city);
    };

    this.storage.store('storedCities', this.starredCities)
  };
  
}