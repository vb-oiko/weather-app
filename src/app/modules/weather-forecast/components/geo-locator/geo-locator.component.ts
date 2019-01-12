import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherForecastService } from '../../services/weather-forecast.service';
declare const google: any;

@Component({
  selector: 'app-geo-locator',
  templateUrl: './geo-locator.component.html',
  styleUrls: ['./geo-locator.component.scss']
})
export class GeoLocatorComponent implements OnInit {

  constructor(
    private router: Router,
    private _ngzone: NgZone,
    private _wfs: WeatherForecastService,
  ) { }

  ngOnInit() {
    this.getCityByGeoPosition();
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
                self.router.navigate(['home/city', city + ', ' + country]);
              });
            };
            
          });
          
        });
      } else {
        this.router.navigate(['home/city', 'New York, US']);
    };
  };
}
