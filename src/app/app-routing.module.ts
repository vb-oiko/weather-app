import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkplaceComponent } from './modules/weather-forecast/components/workplace/workplace.component';
import { CityViewComponent } from './modules/weather-forecast/components/city-view/city-view.component';
import { StarredCitiesComponent } from './modules/weather-forecast/components/starred-cities/starred-cities.component';
import { GeoLocatorComponent } from './modules/weather-forecast/components/geo-locator/geo-locator.component';
import { LoginComponent } from './modules/weather-forecast/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: WorkplaceComponent,
    children : [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      // { path: '', redirectTo: 'city', pathMatch: 'full'},
      { path: 'city/:name', component: CityViewComponent},
      { path: 'city', component: GeoLocatorComponent},
      { path: 'starred', component: StarredCitiesComponent},
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
