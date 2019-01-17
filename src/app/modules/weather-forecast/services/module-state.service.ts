import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ModuleStateService {

  starredCities: BehaviorSubject<string[]>;
  user: Observable<firebase.User>;
  curUser: firebase.User;

  constructor (
    private storage:LocalStorageService,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {

    // if (this.storage.retrieve('storedCities')) {
    //   this.starredCities = this.storage.retrieve('storedCities');
    // };

    this.user = this.afAuth.authState;
    this.starredCities = new BehaviorSubject<string[]>([]);

    this.user.subscribe(user => {
      if (user) {

        this.afs.doc<{cities: string[]}>(`users/${user.uid}`).valueChanges().subscribe(obj => {
          if (obj) {
            this.starredCities.next(obj.cities);
          } else {
            this.starredCities.next(<string[]>[]);
          };
        });

        this.curUser = user;
      } else {
        this.curUser = undefined;
      };
    })

  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  isStarred(city: string): string {
    return this.starredCities.value.includes(city).toString();
  }

  toggleCity(city: string) {
    
    let cities = this.starredCities.value;
    
    let i = cities.indexOf(city);
    if (i !== -1) {
      cities.splice(i, 1);
    } else {
      cities.push(city);
    };

    this.saveToFirestore(cities);
    
    // this.storage.store('storedCities', this.starredCities)
  };
  
  saveToFirestore(cities: string[]) {
    
      if (this.curUser.uid) {
        this.afs.doc<{cities: string[]}>(`users/${this.curUser.uid}`).set({cities:cities})
      } 
  };
  
}