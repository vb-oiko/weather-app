import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModuleStateService } from '../services/module-state.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherGuardGuard implements CanActivate {

  constructor(
    private auth: ModuleStateService, 
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    if (this.auth.curUser) {
      return true;
    } else {
      this.router.navigate(['/home/login']);
    };
  }
}
