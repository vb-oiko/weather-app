import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkplaceComponent } from './modules/weather-forecast/components/workplace/workplace.component';
import { CityViewComponent } from './modules/weather-forecast/components/city-view/city-view.component';
import { StarredCitiesComponent } from './modules/weather-forecast/components/starred-cities/starred-cities.component';
import { GeoLocatorComponent } from './modules/weather-forecast/components/geo-locator/geo-locator.component';
import { LoginComponent } from './modules/weather-forecast/components/login/login.component';
import { WeatherGuardGuard } from './modules/weather-forecast/guards/weather-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: WorkplaceComponent,
    children : [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'city/:name', component: CityViewComponent, canActivate: [WeatherGuardGuard]},
      { path: 'city', component: GeoLocatorComponent, canActivate: [WeatherGuardGuard]},
      { path: 'starred', component: StarredCitiesComponent, canActivate: [WeatherGuardGuard]},
      { path: '*', redirectTo: 'city', pathMatch: 'full'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
