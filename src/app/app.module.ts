import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherForecastModule } from './modules/weather-forecast/weather-forecast.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { ModuleStateService } from './modules/weather-forecast/services/module-state.service'
import { WeatherForecastService } from './modules/weather-forecast/services/weather-forecast.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WeatherForecastModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    ModuleStateService,
    WeatherForecastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
