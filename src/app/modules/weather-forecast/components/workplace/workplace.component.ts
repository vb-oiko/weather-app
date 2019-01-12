import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { NgZone } from '@angular/core';
import { ModuleStateService } from '../../services/module-state.service';
import { Subscription } from 'rxjs';
declare const google: any;

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss'],
  providers: [WeatherForecastService]
})
export class WorkplaceComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  curCity: string;
  starredCities: string[];

  constructor( 
    private _wfs: WeatherForecastService,
    private _mss: ModuleStateService,
    private _ngzone: NgZone
  ) {
    this.subscription = _mss.getState().subscribe(curState => {
      this.curCity = curState.curCity;
      this.starredCities = curState.starredCities;
    })
  }

  ngOnInit() {
    this.getCityByGeoPosition();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCityByGeoPosition() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        var geocoder = new google.maps.Geocoder;
        var self = this;

        geocoder.geocode({
          'location': {lat: position.coords.latitude, lng: position.coords.longitude }}, 
          function(results, status) {
            let city:string;
            let country:string;

            if (status == google.maps.GeocoderStatus.OK) {
              
              var components = results[0]['address_components'];
              
              for(let i=0; i<components.length;i++) {
                if ( components[i]['types'][1]=='political') {
                  if(components[i]['types'][0]=='locality') {city = components[i]['short_name']}
                  if(components[i]['types'][0]=='country') {country = components[i]['short_name']}
                  
                }
              }

              self._ngzone.run(()=>{
                self._mss.searchCity(city + ', ' + country);
              });
            };
            
          });
          
        });
    } else {
      this._mss.searchCity('Kyiv, UA');
    };
  };
}